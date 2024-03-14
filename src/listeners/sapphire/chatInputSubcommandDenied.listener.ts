import { Listener, type UserError } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import { ChatInputSubcommandDeniedPayload, SubcommandPluginEvents } from "@sapphire/plugin-subcommands";
import { parse } from "path";

@ApplyOptions<Listener.Options>({
  name: parse(__filename).name.split(".")[0],
  enabled: true,
  event: SubcommandPluginEvents.ChatInputSubcommandDenied,
})
export class ChatInputSubcommandDeniedListener extends Listener {
  public run(error: UserError, payload: ChatInputSubcommandDeniedPayload) {
    console.log("ChatInputSubcommandDeniedListener", error, payload);
  }
}
