import { rootsManager } from "roots-manager/src/events";
import {IdType} from 'roots-manager';
import {CreateIdProtocol} from 'roots-manager/src/protocol/id';
const set = "result set"
const notSet = "result not set"
const OVERRIDE_CREATE_ID =
    function (type: string, callback?: (...args:any[]) => any) {
        console.log('RootsEvents - (OVERRIDE) createId event received of type',type);
        const id = 'did:'+type+':fakeId'
        console.log('RootsEvents - (OVERRIDE) fake id created',id);
        if(callback) {
            callback(id)
        }
    }


let proto = new CreateIdProtocol((params:IdType)=>{return {value:"did:prism:test"}});
rootsManager.registerCreateIdProtocol(IdType.Fake,proto)
console.log("wallet - registerd prism createId protocol")

// export const startPrismDemo = createAsyncThunk(
//     PRISM_DEMO_START,
//     async (args,thunkAPI) => {
//         if(!prismDemoId) {
//             prismDemoId = (
//                 await thunkAPI.dispatch(
//                     createContact({
//                         displayPictureUrl:
//                             'https://raw.githubusercontent.com/roots-id/roots-react-native/simple-android-ios-web/src/assets/ATALAPRISM.png', //https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png
//                         displayName: BOTS_NAMES.PRISM_DEMO,
//                     })
//                 )
//             ).payload
//
//             console.log('wallet - prismDemo contact name', prismDemoId);
//             thunkAPI.dispatch(initiateChat({chatId: prismDemoId}));
//         }
//         // const result1 = await DIDFunctionalities.createPeerDID('false')
//         // console.log('wallet - DIDFunctionalities await peerDID', result1);
//         // const didObj: identifier = {
//         //     _id: result1,
//         //     alias: "prism peer did " + result1,
//         //     published: false
//         // }
//         // const prismDid = (await thunkAPI.dispatch(createAndAddId(didObj)))
//         //     .payload;
//         // console.log("")
//
//         const error = await DIDFunctionalities.StartPrismAgent('did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0').catch(console.error)
//         if(!error || error.length<=0) {
//             console.log('wallet - prism agent started');
//             thunkAPI.dispatch(
//                 addMessage({
//                     chatId: prismDemoId,
//                     message: sendMessage(
//                         prismDemoId,
//                         rootsHelperId,
//                         "Started Prism agent w/mediation",
//                         MessageType.TEXT,
//                         false,
//                     ),
//                 })
//             )
//
//             const mediatorPeerDid = await DIDFunctionalities.createPeerDID('false')
//             console.log("wallet - created peer did from mediator",mediatorPeerDid)
//
//             if(mediatorPeerDid) {
//                 const oob = generateOOB(mediatorPeerDid)
//                 console.log("wallet - encoded oob",oob)
//                 // const decodedOob = atob(oob)
//                 // console.log("wallet - created oob",decodedOob);
//                 thunkAPI.dispatch(
//                     addMessage({
//                         chatId: prismDemoId,
//                         message: sendMessage(
//                             prismDemoId,
//                             rootsHelperId,
//                             "Prism created your identifier and corresponding Out-of-Band (OOB) invitation",
//                             MessageType.PROMPT_DISPLAY_IDENTIFIER,
//                             false,
//                             {identifier:
//                                     {
//                                         identifier: mediatorPeerDid,
//                                         oob: oob
//                                     }
//                             }
//                         ),
//                     })
//                 )
//
//             } else {
//                 console.error("Could not create Prism peer did",mediatorPeerDid)
//                 thunkAPI.dispatch(
//                     addMessage({
//                         chatId: prismDemoId,
//                         message: sendMessage(
//                             prismDemoId,
//                             rootsHelperId,
//                             "Failed to generate your identifier",
//                             MessageType.TEXT,
//                             false,
//                         ),
//                     })
//                 )
//             }
//
//             // return url
//         } else {
//             console.error("wallet - prism agent failed to start",error)
//             thunkAPI.dispatch(
//                 addMessage({
//                     chatId: prismDemoId,
//                     message: sendMessage(
//                         prismDemoId,
//                         rootsHelperId,
//                         "Error starting Prism agent: "+error,
//                         MessageType.PROMPT_RETRY_PROCESS,
//                         false,
//                         {callback: startPrismDemo}
//                     ),
//                 })
//             )
//         }
//
//         //console.log('wallet - msgpacked is', msgpacked);
//         //
//         // const resultmediated = await DIDFunctionalities.createPeerDID('true')
//         // console.log('wallet - DIDFunctionalities mediated', resultmediated);
//         //
//         // const DIDDOC2 = await DIDFunctionalities.resolveDID(resultmediated);
//         // console.log('wallet - DIDDOC for ',resultmediated,' is', DIDDOC2);
//         // let url = 'https://domain.com/path?_oob=eyJpZCI6IjhkYzY3MTRjLTJiNmEtNGZkOS1iYzg3LWJiODhlYTk1NmFiNyIsInR5cGUiOiJodHRwczovL2RpZGNvbW0ub3JnL291dC1vZi1iYW5kLzIuMC9pbnZpdGF0aW9uIiwiZnJvbSI6ImRpZDpwZWVyOjIuRXo2TFNxQWlIZWRIRmZiZW14UnpyUjV0ZTQ2VUdzdHhkcW0yMXpFelVjd3dGaVhwcC5WejZNa2ljRWh6NHRoQlZMWVRlc3VEWkJOOTdLRTdoTHdYRVR0UWppajJrcWl3N3Q0LlNleUowSWpvaVpHMGlMQ0p6SWpvaWFIUjBjRG92TDJodmMzUXVaRzlqYTJWeUxtbHVkR1Z5Ym1Gc09qZ3dPREF2Wkdsa1kyOXRiU0lzSW5JaU9sdGRMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDAiLCJib2R5Ijp7ImdvYWxfY29kZSI6ImNvbm5lY3QiLCJnb2FsIjoiRXN0YWJsaXNoIGEgdHJ1c3QgY29ubmVjdGlvbiBiZXR3ZWVuIHR3byBwZWVycyIsImFjY2VwdCI6W119fQ=='
//
//         // const msgpacked2 = await DIDFunctionalities.parseOOBMessage(url);
//
//     }
// );

//create async function called generateOOB() that returns a string
function generateOOB(mediatorPeerDID: string): string {
    let msgString = notSet
    // rEvent.emit(EventType.CreateId,"override",(id: string)=> {
    //     console.log("RootsPrism - createId with callback - Callback called with id",id)
    //     const msg = {
    //         type: 'https://didcomm.org/out-of-band/2.0/invitation',
    //         id: id,
    //         from: mediatorPeerDID,
    //         body: {
    //             'accept': ['didcomm/v2'],
    //         }
    //     }
    //     msgString = JSON.stringify(msg);
    //     console.log("wallet - OOB message is", msgString);
    // })
    return msgString;
}
