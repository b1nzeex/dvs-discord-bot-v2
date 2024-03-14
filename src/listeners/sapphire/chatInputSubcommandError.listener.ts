import { Listener } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import { ChatInputSubcommandErrorPayload, SubcommandPluginEvents } from "@sapphire/plugin-subcommands";
import { parse } from "path";

@ApplyOptions<Listener.Options>({
  name: parse(__filename).name.split(".")[0],
  enabled: true,
  event: SubcommandPluginEvents.ChatInputSubcommandError,
})
export class ChatInputSubcommandErrorListener extends Listener {
  public run(error: unknown, payload: ChatInputSubcommandErrorPayload) {
    console.log("ChatInputSubcommandErrorListener", error, payload);
  }
}
