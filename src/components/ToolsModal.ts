import { Modal } from '@livestorm/plugin';
import { AllParticipants } from './users/AllParticipants';
import { PublishMessage } from './PublishMessage';
import { ChatBroadcast } from './ChatBroadcast';

export async function ToolsModal() {
  AllParticipants().then((participants: any[]) => {
    var participantNames: string[] = [];
    for (let i = 0; i < participants.length; i++) {
      if (participants[i].is_connected) {
        participantNames.push(
          participants[i].first_name + ' ' + participants[i].last_name,
        );
      }
    }
    Modal.showIframe({
      template: require('../templates/tools.html').default, // Reference to the html template
      variables: { participants: participantNames }, // This content will be passed into the modal
      size: 'normal',
      onMessage: ({ action, value }: any) => {
        PublishMessage(action, value);
        let result: string[] = JSON.parse(value);
        if (action == 'random') {
          setTimeout(function () {
            let html = '<div>';
            for (let i = 0; i < result.length; i++) {
              html += '<div>' + result[i] + '</div>';
            }
            html += '</div>';
            if (result.length == 1) {
              ChatBroadcast('The chosen one is: ', html);
            } else {
              ChatBroadcast('The chosen ones are: ', html);
            }
          }, 3000);
        }

        if (action == 'group') {
          setTimeout(function () {
            let html = '<div>';
            for (let i = 0; i < result.length; i++) {
              html += '<div> Group ' + (i + 1) + ': ' + result[i] + '</div>';
            }
            html += '</div>';
            ChatBroadcast('Groupings: ', html);
          }, 3000);
        }

        // this.sendMessage({ message: 1 });
        // if (message === 'getUsers') {
        // }
        // AllParticipants().then((participants) => console.log(participants));
        // Me().then((me) => console.log(me));
        // TeamMembers().then((teamMembers) => console.log(teamMembers));
      }, // We can receive messages from the template through here
    });
  });
}
