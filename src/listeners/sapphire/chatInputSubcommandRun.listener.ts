import { Listener } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import {
  ChatInputCommandSubcommandMappingMethod,
  ChatInputSubcommandRunPayload,
} from "@sapphire/plugin-subcommands";
import { ChatInputCommandInteraction } from "discord.js";
import { parse } from "path";

@ApplyOptions<Listener.Options>({
  name: "chatInputSubcommandRun",
  enabled: true,
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
