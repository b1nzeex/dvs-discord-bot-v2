import { Listener } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import {
  ChatInputSubcommandAcceptedPayload,
  SubcommandMappingMethod,
  SubcommandPluginEvents,
} from "@sapphire/plugin-subcommands";
import { ChatInputCommandInteraction } from "discord.js";
import { parse } from "path";

@ApplyOptions<Listener.Options>({
  name: parse(__filename).name.split(".")[0],
  enabled: true,
  event:
    SubcommandPluginEvents.SubcommandMappingIsMissingChatInputCommandHandler,
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
