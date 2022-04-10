import { Plugin, registerPlugin } from "enmity-api/plugins";
import { EnmitySectionID, Command, ApplicationCommandInputType, ApplicationCommandType, ApplicationCommandOptionType } from "enmity-api/commands";
import { sendReply } from "enmity-api/clyde";
import { fetchCurrentUser } from "enmity-api/users";
import { getToken } from "enmity-api/token";

const multitask: Plugin = {
  name: "multitask",
  commands: [],

  onStart() {
    const multitasktoken: Command = {
      id: "multitask.token",
      applicationId: EnmitySectionID,
      name: "multitasktoken",
      displayName: "multitasktoken",
      description: "get your token for use with multitask!",
      displayDescription: "get your token for use with multitask!",
      type: ApplicationCommandType.Chat,
      inputType: ApplicationCommandInputType.BuiltIn,
    
      execute: async function (args, message): Promise<void> {   
        const user = await fetchCurrentUser();
        sendReply(message.channel.id, 'hi, ' + user.username + '! your token is: ||' + ' ' + getToken() + ' ' + '||' + '\n' + 'under **no circumstances** should you share this token with anyone. **sharing this token gives attackers full access to your account**.');
      }
    }

    this.commands.push(multitasktoken);
  },

  onStop() {

  }
}

registerPlugin(multitask);