import {
  Listener,
  type ChatInputCommandDeniedPayload,
  type UserError,
} from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";

@ApplyOptions<Listener.Options>({
  name: __filename.split(".")[0],
  enabled: true,
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
