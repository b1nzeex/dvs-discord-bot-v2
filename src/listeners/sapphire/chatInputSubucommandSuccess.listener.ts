import { Listener } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import {
  ChatInputCommandSubcommandMappingMethod,
  ChatInputSubcommandRunPayload,
} from "@sapphire/plugin-subcommands";
import { ChatInputCommandInteraction } from "discord.js";
import { parse } from "path";

@ApplyOptions<Listener.Options>({
  name: "chatInputSubcommandSuccess",
  enabled: true,
})
export class ChatInputSubcommandSuccessListener extends Listener {
  public run(
    interaction: ChatInputCommandInteraction,
    subcommand: ChatInputCommandSubcommandMappingMethod,
    payload: ChatInputSubcommandRunPayload
  ) {
    console.log("ChatInputSubcommandSuccessListener", payload);
  }
}
