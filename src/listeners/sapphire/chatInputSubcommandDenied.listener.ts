import { Listener, type UserError } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import { ChatInputSubcommandDeniedPayload } from "@sapphire/plugin-subcommands";
import { parse } from "path";

@ApplyOptions<Listener.Options>({
  name: "chatInputSubcommandDenied",
  enabled: true,
})
export class ChatInputSubcommandDeniedListener extends Listener {
  public run(error: UserError, payload: ChatInputSubcommandDeniedPayload) {
    console.log("ChatInputSubcommandDeniedListener", error, payload);
  }
}
