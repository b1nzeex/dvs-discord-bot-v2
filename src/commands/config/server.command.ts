import { Subcommand } from "@sapphire/plugin-subcommands";
import { ApplyOptions } from "@sapphire/decorators";
import { parse } from "path";
import { PermissionFlagsBits } from "discord.js";
import { Time } from "@sapphire/time-utilities";
import { BucketScope } from "@sapphire/framework";

// Subcommand imports
import { ServerAddSubcommand } from "./server/_server.add.subcommand";
import { ServerRemoveSubcommand } from "./server/_server.remove.subcommand";
import { ServerEditSubcommand } from "./server/_server.edit.subcommand";
import { ServerViewSubcommand } from "./server/_server.view.subcommand";

@ApplyOptions<Subcommand.Options>({
  name: parse(__filename).name.split(".")[0],
  description: "Manage the rust servers in the database",
  preconditions: ["OwnerOnly"],
  requiredClientPermissions: [
    PermissionFlagsBits.SendMessages,
    PermissionFlagsBits.EmbedLinks,
  ],
  cooldownDelay: Time.Second * 10,
  cooldownLimit: 2,
  cooldownScope: BucketScope.User,
  cooldownFilteredUsers: process.env.DISCORD_APP_OWNERS.split(","),
  runIn: ["GUILD_ANY", "DM"],
  enabled: true,
  subcommands: [
    {
      name: "add",
      chatInputRun: "chatInputAdd",
    },
    {
      name: "remove",
      chatInputRun: "chatInputRemove",
    },
    {
      name: "edit",
      chatInputRun: "chatInputEdit",
    },
    {
      name: "view",
      chatInputRun: "chatInputView",
    },
  ],
})
export class ServerCommands extends Subcommand {
  /*
    This method will be called to register the command as a chat input command.
  */
  public override registerApplicationCommands(registry: Subcommand.Registry) {
    registry.registerChatInputCommand((command) => {
      return command
        .setName(this.name)
        .setDescription(this.description)
        .addSubcommand((command) =>
          command
            .setName("add")
            .setDescription("Add a rust server to the database")
        )
        .addSubcommand((command) =>
          command
            .setName("remove")
            .setDescription("Remove a rust server from the database")
            .addStringOption((option) =>
              option
                .setName("server")
                .setDescription("The server to remove")
                .setRequired(true)
                .setAutocomplete(true)
            )
        )
        .addSubcommand((command) =>
          command
            .setName("edit")
            .setDescription("Edit a rust server in the database")
            .addStringOption((option) =>
              option
                .setName("server")
                .setDescription("The server to edit")
                .setRequired(true)
                .setAutocomplete(true)
            )
        )
        .addSubcommand((command) =>
          command
            .setName("view")
            .setDescription("View a rust server in the database")
            .addStringOption((option) =>
              option
                .setName("server")
                .setDescription("The server to view")
                .setRequired(false)
                .setAutocomplete(true)
            )
        );
    });
  }

  public chatInputAdd(interaction: Subcommand.ChatInputCommandInteraction) {
    console.log("chatInputAdd");
    return ServerAddSubcommand.chatInputRun(interaction);
  }

  public chatInputRemove(interaction: Subcommand.ChatInputCommandInteraction) {
    console.log("chatInputRemove");
    return ServerRemoveSubcommand.chatInputRun(interaction);
  }

  public chatInputEdit(interaction: Subcommand.ChatInputCommandInteraction) {
    console.log("chatInputEdit");
    return ServerEditSubcommand.chatInputRun(interaction);
  }

  public chatInputView(interaction: Subcommand.ChatInputCommandInteraction) {
    console.log("chatInputView");
    return ServerViewSubcommand.chatInputRun(interaction);
  }
}
