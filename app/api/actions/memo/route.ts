// import {
//     ActionPostResponse,
//     ACTIONS_CORS_HEADERS,
//     createPostResponse,
//     MEMO_PROGRAM_ID,
//     ActionGetResponse,
//     ActionPostRequest,
//   } from "@solana/actions";
//   import {
//     clusterApiUrl,
//     ComputeBudgetProgram,
//     Connection,
//     PublicKey,
//     Transaction,
//     TransactionInstruction,
//   } from "@solana/web3.js";



//   export const GET = async (req: Request) => {
//     const payload: ActionGetResponse = {
//       title: "Blinks Testing",
//       icon: new URL(
//         "/cat.jpg",
//         new URL(req.url).origin
//       ).toString(),
//       description:
//         "Testing out Blinks",
//       label: "Send Memo",
//       links: 
//         {
//           actions: [
//             {
//             label: "Send Sol💵",
//             href: req.url,
//           },
  
//           {
//             label: "Send Bonk✌️",
//             href: "https://solana.com/developers",
//           }
//         ]
//         }

//     };




//     export const POST = async (req: Request) => {
//         try {
//                 const body: ActionPostRequest = await req.json();

//                 let account:  PublicKey;

//         }
//         try{
//             account = new PublicKey(ReportBody.account)
//         }
//         catch (err){
//             return new Response('Invalid "account" provided', {
//                 status: 400,
//                 headers: ACTIONS_CORS_HEADERS,
//             });
//         }



//         const connection = new Transaction().add(
//             ComputeBudgetProgram.setComputeUnitPrice({
//                 microLamports: 1000,
//             }),
//             new TransactionInstruction({
//                 programId: new PublicKey(MEMO_PROGRAM_ID),
//                 data: Buffer.from(
//                     "This is a testing memo message",
//                     "utf8",

//                 ),
                
//                 keys: [],
//             })
//         );


//         Transaction.feePayer = account;


//         transaction.recentBlockhash = (
//             await connection.getLatestBlockhash()
//         ).blockhash;


//         const payload: ActionPostResponse  = await createPostResponse({
//             fields: {
//                 transaction,
//                 message: "Post this memo",
//             },

//         });



//         return Response.json(payload,{
//             headers: ACTIONS_CORS_HEADERS,
//         });
//         catch (err){
//             console.log(err);

//             let message = "An error occurred while sending the memo";
//             if(typeof err === "string"){
//                 message = err;
//             }


//             return new Response(message, {
//                 status: 500,
//                 headers: ACTIONS_CORS_HEADERS,
//         }
//     }













//     return Response.json(payload, {
//         headers: ACTIONS_CORS_HEADERS,
//     });
// };
// export const OPTIONS = GET;





















//@audit

// import {
//     ActionPostResponse,
//     ACTIONS_CORS_HEADERS,
//     createPostResponse,
//     MEMO_PROGRAM_ID,
//     ActionGetResponse,
//     ActionPostRequest,
//   } from "@solana/actions";
//   import {
//     clusterApiUrl,
//     ComputeBudgetProgram,
//     Connection,
//     PublicKey,
//     Transaction,
//     TransactionInstruction,
//   } from "@solana/web3.js";
  
//   // GET request handler
//   export const GET = async (req: Request) => {
//     const payload: ActionGetResponse = {
//       title: "Blinks Testing",
//       icon: new URL("/cat.jpg", new URL(req.url).origin).toString(),
//       description: "Testing out Blinks",
//       label: "Send Memo",
//       links: {
//         actions: [
//           {
//             label: "Send Sol💵",
//             href: req.url,
//           },
//           {
//             label: "Send Bonk✌️",
//             href: "https://solana.com/developers",
//           },
//         ],
//       },
//     };
  
//     return new Response(JSON.stringify(payload), {
//       headers: ACTIONS_CORS_HEADERS,
//     });
//   };
  
//   // POST request handler
//   export const POST = async (req: Request) => {
//     try {
//       const body: ActionPostRequest = await req.json();
  
//       // Validate the provided account public key
//       let account: PublicKey;
//       try {
//         account = new PublicKey(body.account);
//       } catch (err) {
//         return new Response('Invalid "account" provided', {
//           status: 400,
//           headers: ACTIONS_CORS_HEADERS,
//         });
//       }
  
//       // Establish connection to the Solana cluster
//       const connection = new Connection(
//         process.env.SOLANA_RPC || clusterApiUrl("devnet")
//       );
  
//       // Create a new transaction with the memo instruction
//       const transaction = new Transaction().add(
//         ComputeBudgetProgram.setComputeUnitPrice({
//           microLamports: 1000,
//         }),
//         new TransactionInstruction({
//           programId: new PublicKey(MEMO_PROGRAM_ID),
//           data: Buffer.from(
//             "This is a testing memo message",
//             "utf8"
//           ),
//           keys: [],
//         })
//       );
  
//       // Set the fee payer to the user's account
//       transaction.feePayer = account;
  
//       // Get the latest blockhash and assign it to the transaction
//       const { blockhash } = await connection.getLatestBlockhash();
//       transaction.recentBlockhash = blockhash;
  
//       // Create the response payload
//       const payload: ActionPostResponse = await createPostResponse({
//         fields: {
//           transaction,
//           message: "Post this memo",
//         },
//       });
  
//       return new Response(JSON.stringify(payload), {
//         headers: ACTIONS_CORS_HEADERS,
//       });
//     } catch (err) {
//       console.error(err);
//       const message =
//         typeof err === "string"
//           ? err
//           : "An error occurred while sending the memo";
//       return new Response(message, {
//         status: 500,
//         headers: ACTIONS_CORS_HEADERS,
//       });
//     }
//   };
  
//   // OPTIONS request handler
//   export const OPTIONS = GET;
  












import {
    ActionPostResponse,
    ACTIONS_CORS_HEADERS,
    createPostResponse,
    MEMO_PROGRAM_ID,
    ActionGetResponse,
    ActionPostRequest,
  } from "@solana/actions";
  import {
    clusterApiUrl,
    ComputeBudgetProgram,
    Connection,
    PublicKey,
    Transaction,
    TransactionInstruction,
  } from "@solana/web3.js";
  
  // GET request handler
  export const GET = async (req: Request) => {
    const payload: ActionGetResponse = {
      title: "Blinks Testing",
      icon: new URL("/cat.jpg", new URL(req.url).origin).toString(),
      description: "Testing out Blinks",
      label: "Send Memo",
      links: {
        actions: [
          {
            label: "Send Sol💵",
            href: req.url,
          },
          {
            label: "Send Bonk✌️",
            href: "https://solana.com/developers",
          },
        ],
      },
    };
  
    return new Response(JSON.stringify(payload), {
      headers: ACTIONS_CORS_HEADERS,
    });
  };
  
  // POST request handler
  export const POST = async (req: Request) => {
    try {
      const body: ActionPostRequest = await req.json();
  
      // Validate the provided account public key
      let account: PublicKey;
      try {
        account = new PublicKey(body.account);
      } catch {
        return new Response('Invalid "account" provided', {
          status: 400,
          headers: ACTIONS_CORS_HEADERS,
        });
      }
  
      // Establish connection to the Solana cluster
      const connection = new Connection(
        process.env.SOLANA_RPC || clusterApiUrl("devnet")
      );
  
      // Create a new transaction with the memo instruction
      const transaction = new Transaction().add(
        ComputeBudgetProgram.setComputeUnitPrice({
          microLamports: 1000,
        }),
        new TransactionInstruction({
          programId: new PublicKey(MEMO_PROGRAM_ID),
          data: Buffer.from("This is a testing memo message", "utf8"),
          keys: [],
        })
      );
  
      // Set the fee payer to the user's account
      transaction.feePayer = account;
  
      // Get the latest blockhash and assign it to the transaction
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
  
      // Create the response payload
      const payload: ActionPostResponse = await createPostResponse({
        fields: {
          transaction,
          message: "Post this memo",
        },
      });
  
      return new Response(JSON.stringify(payload), {
        headers: ACTIONS_CORS_HEADERS,
      });
    } catch (err) {
      console.error(err);
      const message =
        typeof err === "string" ? err : "An error occurred while sending the memo";
      return new Response(message, {
        status: 500,
        headers: ACTIONS_CORS_HEADERS,
      });
    }
  };
  
  // OPTIONS request handler
  export const OPTIONS = GET;