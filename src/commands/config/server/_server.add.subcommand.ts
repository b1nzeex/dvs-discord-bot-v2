import { Subcommand } from "@sapphire/plugin-subcommands";

export class ServerAddSubcommand {
  public static chatInputRun(
    interaction: Subcommand.ChatInputCommandInteraction
  ) {
    return interaction.reply({ content: "Server Add Subcommand" });
  }
}
