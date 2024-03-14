import { Listener } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import {
  ChatInputSubcommandAcceptedPayload,
  SubcommandMappingMethod,
} from "@sapphire/plugin-subcommands";
import { ChatInputCommandInteraction } from "discord.js";
import { parse } from "path";

@ApplyOptions<Listener.Options>({
  name: "subcommandMappingIsMissingChatInputCommandHandler",
  enabled: true,
})
export class SubcommandMappingIsMissingChatInputCommandHandlerListener extends Listener {
  public run(
    message: ChatInputCommandInteraction,
    subcommand: SubcommandMappingMethod,
    payload: ChatInputSubcommandAcceptedPayload
  ) {
    console.log(
      "SubcommandMappingIsMissingChatInputCommandHandlerListener",
      payload
    );
  }
}
