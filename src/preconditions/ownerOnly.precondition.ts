import { ApplyOptions } from "@sapphire/decorators";
import { Precondition } from "@sapphire/framework";
import { ChatInputCommandInteraction } from "discord.js";

declare module "@sapphire/framework" {
  interface Preconditions {
    OwnerOnly: never;
  }
}

@ApplyOptions<Precondition.Options>({
  name: 'OwnerOnly',
})
export class OwnerOnlyPrecondition extends Precondition {
  public override chatInputRun(interaction: ChatInputCommandInteraction) {
    return this.isOwner(interaction.user.id);
  }

  private isOwner(id: string) {
    return process.env.DISCORD_APP_OWNERS.split(",").includes(id)
      ? this.ok()
      : this.error({ message: "You are not an owner of this bot." });
  }
}
