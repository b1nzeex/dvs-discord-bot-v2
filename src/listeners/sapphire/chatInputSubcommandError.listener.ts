import { Listener } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import { ChatInputSubcommandErrorPayload } from "@sapphire/plugin-subcommands";
import { parse } from "path";

@ApplyOptions<Listener.Options>({
  name: "chatInputSubcommandError",
  enabled: true,
})
export class ChatInputSubcommandErrorListener extends Listener {
  public run(error: unknown, payload: ChatInputSubcommandErrorPayload) {
    console.log("ChatInputSubcommandErrorListener", error, payload);
  }
}
