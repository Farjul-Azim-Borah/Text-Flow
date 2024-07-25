// import { currentUser } from '@clerk/nextjs/server'
// import React from 'react'


// async function history() {

//   const user = await currentUser();
//   return (
//     <div>
//         <h2>Hi how are you</h2>
//     </div>
//   )
// }

// export default history


// import templates from "@/app/(data)/templates";
// import { Button } from "@/components/ui/button";
// import { db } from "@/utils/db";
// import { AIOutput } from "@/utils/schema";
// import { currentUser } from "@clerk/nextjs/server";
// import { desc , eq } from "drizzle-orm";
// import Image from "next/image";
// import React,{useState , useEffect} from "react";
// import TemplateListSection from "../_components/TemplateListSection";

// export interface HISTORY{
//   id: number;
//   formData: string;
//   aiResponse: string | null;
//   templateSlug: string;
//   createdBy: string | null;
//   createdAt: string | null;
// }

// const History = () => {
//   const [data, setData] = useState<HISTORY>([]);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       const user = await currentUser();

//       if (user) {
//         const userId = user.id;
//         const results = await db
//           .select()
//           .from(AIOutput)
//           .where(eq(AIOutput.createdBy, userId))
//           .orderBy(desc(AIOutput.createAt));

//         setData(results);
//       } else {
//         console.error('No user logged in');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <header
//         style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           padding: '1rem',
//           backgroundColor: '#f4f4f4',
//           borderBottom: '1px solid #ddd',
//         }}
//       >
//         <h1>History</h1>
//         <Button onClick={fetchData}>Refresh</Button>
//       </header>
//       <div style={{ padding: '1rem' }}>
//         <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//           <thead>
//             <tr>
//               <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Template</th>
//               <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>AI Response</th>
//               <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Date</th>
//               <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Words</th>
//               <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Copy</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item:HISTORY,index:number) => {
//               const template = templates.find(t => t.slug === item.templateSlug);
//               return (
//                 <tr key={item.id}>
//                   <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>
//                     {template && (
//                       <>
//                         <Image src={template.icon} alt={template.name} width={50} height={50} />
//                         {template.name}
//                       </>
//                     )}
//                   </td>
//                   <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>{item.aiResponse || ''}</td>
//                   <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''}</td>
//                   <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>{(item.aiResponse ? item.aiResponse.split(' ').length : 0)}</td>
//                   <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}><Button>Copy</Button></td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default History;