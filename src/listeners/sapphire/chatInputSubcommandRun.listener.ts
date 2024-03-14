import { Listener } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import { ChatInputCommandSubcommandMappingMethod, ChatInputSubcommandRunPayload, SubcommandPluginEvents } from "@sapphire/plugin-subcommands";
import { ChatInputCommandInteraction } from "discord.js";
import { parse } from "path";

@ApplyOptions<Listener.Options>({
  name: parse(__filename).name.split(".")[0],
  enabled: true,
  event: SubcommandPluginEvents.ChatInputSubcommandRun,
})
export class ChatInputSubcommandRunListener extends Listener {
  public run(
    interaction: ChatInputCommandInteraction,
    subcommand: ChatInputCommandSubcommandMappingMethod,
    payload: ChatInputSubcommandRunPayload
  ) {
    console.log("ChatInputSubcommandRunListener", payload);
  }
}
