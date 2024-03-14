import {
  Events,
  Listener,
  type ChatInputCommandDeniedPayload,
  type UserError,
} from "@sapphire/framework";
import { parse } from "path";
import { ApplyOptions } from "@sapphire/decorators";

@ApplyOptions<Listener.Options>({
  name: parse(__filename).name.split(".")[0],
  enabled: true,
  event: Events.ChatInputCommandDenied,
})
export class ChatInputCommandDeniedListener extends Listener {
  public run(error: UserError, { interaction }: ChatInputCommandDeniedPayload) {
    if (interaction.deferred || interaction.replied) {
      return interaction.editReply({
        content: error.message,
      });
    }

    return interaction.reply({
      content: error.message,
      ephemeral: true,
    });
  }
}
