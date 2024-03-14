import dotenv from "dotenv";
dotenv.config();

import { DvSClient } from "./client";
import "@sapphire/plugin-api/register";
import "@sapphire/plugin-subcommands/register";

new DvSClient().login(process.env.DISCORD_APP_TOKEN!);
