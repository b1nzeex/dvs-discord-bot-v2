import { Listener } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import { parse } from "path";

@ApplyOptions<Listener.Options>({
  name: parse(__filename).name.split(".")[0],
  once: true,
})
export class ReadyListener extends Listener {
  public run() {
    const { user } = this.container.client;
    this.container.logger.info(`${user.username} is online and ready!`);
  }
}
