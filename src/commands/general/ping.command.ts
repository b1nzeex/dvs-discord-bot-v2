import {
  ApplicationCommandRegistry,
  BucketScope,
  Command,
} from "@sapphire/framework";
import {
  PermissionFlagsBits,
  type ChatInputCommandInteraction,
} from "discord.js";
import { parse } from "path";
import { ApplyOptions } from "@sapphire/decorators";
import { Time } from "@sapphire/time-utilities";

@ApplyOptions<Command.Options>({
  name: parse(__filename).name.split(".")[0],
  description: "Check the bot's latency to the Discord API",
  requiredClientPermissions: [
    PermissionFlagsBits.SendMessages,
    PermissionFlagsBits.EmbedLinks,
  ],
  requiredUserPermissions: [PermissionFlagsBits.SendMessages],
  runIn: ["GUILD_ANY", "DM"],
  cooldownDelay: Time.Second * 10,
  cooldownLimit: 1,
  cooldownScope: BucketScope.User,
  cooldownFilteredUsers: process.env.DISCORD_APP_OWNERS.split(","),
  enabled: true,
})
export class PingCommand extends Command {
  /*
    This method will be called to register the command as a chat input command.
  */
  public override registerApplicationCommands(
    registry: ApplicationCommandRegistry
  ) {
    registry.registerChatInputCommand((command) => {
      command.setName(this.name).setDescription(this.description);
    });
  }

  /*
    This method will be called when the command is executed.
  */
  public chatInputRun(interaction: ChatInputCommandInteraction) {
    return interaction.reply(
      `> Pong! 🏓 \`${this.container.client.ws.ping}ms\``
    );
  }
}
