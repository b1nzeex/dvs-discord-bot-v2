import {
  SapphireClient,
  ApplicationCommandRegistries,
  RegisterBehavior,
  container,
  LogLevel,
} from "@sapphire/framework";
import { IntentsBitField, Partials, PresenceUpdateStatus } from "discord.js";
import { PrismaClient } from "@prisma/client";
import { SettingsProvider } from "./util/database/settings";
import { DvSLogger } from "./util/logging/logger";

declare module "@sapphire/pieces" {
  interface Container {
    db: PrismaClient;
    settings: SettingsProvider;
  }
}

export class DvSClient extends SapphireClient {
  public constructor() {
    super({
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.MessageContent,
      ],
      partials: [Partials.Message, Partials.Reaction, Partials.User],
      presence: {
        status: PresenceUpdateStatus.DoNotDisturb,
      },
      logger: {
        // instance: new DvSLogger(),
        level: LogLevel.Debug,
      },
      allowedMentions: {
        parse: ["users", "roles"],
        repliedUser: true,
      },
      loadSubcommandErrorListeners: true,
    });
  }

  public override async login(token?: string) {
    // Override the default behavior of the application command registries
    ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(
      RegisterBehavior.BulkOverwrite
    );

    // Connect to the database
    container.db = new PrismaClient();
    container.settings = new SettingsProvider(container.db);
    await container.settings.init();

    // Login to Discord
    return super.login(token);
  }
}
