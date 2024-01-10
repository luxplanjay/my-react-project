// export default function App() {
//   return <div>App</div>;
// }

// const FriendList = ({ friends }) => {
//   return (
//     <ul className="friend-list">
//       {friends.map((f) => (
//         <li key={f.id}>
//           <div className="item">
//             <img
//               className="avatar"
//               src={f.avatar}
//               alt="User avatar"
//               width="48"
//             />
//             <p className="name">{f.name}</p>
//             <p
//               className={[
//                 "status",
//                 f.isOnline ? "is-online" : "is-offline",
//               ].join(" ")}
//             >
//               {f.isOnline ? "Online" : "Offline"}
//             </p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// const StatsWidget = ({ title, stats }) => {
//   return (
//     <section className="statistics">
//       <h2 className="title">{title}</h2>

//       <ul className="stat-list">
//         {stats.map((stat) => (
//           <li className="item" key={stat.id}>
//             <span className="label">{stat.label}</span>
//             <span className="value">{stat.value}%</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// const stats = [
//   { id: "id-1", label: ".docx", value: 22 },
//   { id: "id-2", label: ".pdf", value: 4 },
//   { id: "id-3", label: ".mp3", value: 17 },
//   { id: "id-4", label: ".psd", value: 47 },
//   { id: "id-5", label: ".pdf", value: 10 },
// ];

// const friends = [
//   {
//     avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
//     name: "Mango",
//     isOnline: true,
//     id: 1812,
//   },
//   {
//     avatar: "https://cdn-icons-png.flaticon.com/512/616/616438.png",
//     name: "Kiwi",
//     isOnline: false,
//     id: 1137,
//   },
//   {
//     avatar: "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
//     name: "Ajax",
//     isOnline: true,
//     id: 1213,
//   },
//   {
//     avatar: "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
//     name: "Jay",
//     isOnline: true,
//     id: 1714,
//   },
//   {
//     avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
//     name: "Poly",
//     isOnline: false,
//     id: 1284,
//   },
// ];

// const transactions = [
//   {
//     id: "1e0700a2-5183-4291-85cc-2065a036a683",
//     type: "invoice",
//     amount: "964.82",
//     currency: "LRD",
//   },
//   {
//     id: "a30f821b-4d25-4ff0-abdd-e340b3f0dd2b",
//     type: "payment",
//     amount: "686.50",
//     currency: "WST",
//   },
//   {
//     id: "44dca67a-8e5a-4798-bf8e-b15efd4e1abd",
//     type: "invoice",
//     amount: "828.62",
//     currency: "UGX",
//   },
//   {
//     id: "ea8ed3dc-2b68-4a53-905a-53ecb0adef33",
//     type: "withdrawal",
//     amount: "527.80",
//     currency: "ALL",
//   },
//   {
//     id: "ea76146a-0b00-4b80-bc02-a8c822176712",
//     type: "withdrawal",
//     amount: "371.43",
//     currency: "MUR",
//   },
//   {
//     id: "63ca02f9-d637-46b5-9237-f3b24425e029",
//     type: "payment",
//     amount: "862.44",
//     currency: "AUD",
//   },
//   {
//     id: "ed0263e8-59a5-4bf1-87e0-2bb88e53dc34",
//     type: "withdrawal",
//     amount: "907.00",
//     currency: "GEL",
//   },
//   {
//     id: "6013bad0-750c-4691-8bc2-d8f2b43969c4",
//     type: "withdrawal",
//     amount: "352.52",
//     currency: "UGX",
//   },
//   {
//     id: "252c7be4-8b06-4fa7-8d42-61fb835b70d5",
//     type: "payment",
//     amount: "388.98",
//     currency: "TOP",
//   },
//   {
//     id: "4eaab41b-b967-40ac-82ed-85fc66f646f1",
//     type: "deposit",
//     amount: "103.10",
//     currency: "BWP",
//   },
//   {
//     id: "9648a350-8469-42d5-8bf3-18090de5fe67",
//     type: "withdrawal",
//     amount: "322.32",
//     currency: "MRO",
//   },
//   {
//     id: "9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc",
//     type: "invoice",
//     amount: "14.79",
//     currency: "PYG",
//   },
//   {
//     id: "43ef232c-80e9-4d6f-b48a-b22405620de3",
//     type: "payment",
//     amount: "904.86",
//     currency: "CHF",
//   },
//   {
//     id: "5161682e-e620-4019-ab0a-24ceb10fbd20",
//     type: "withdrawal",
//     amount: "307.08",
//     currency: "NOK",
//   },
//   {
//     id: "7b119d71-42e6-4c42-a141-6818b07bb9ff",
//     type: "invoice",
//     amount: "275.07",
//     currency: "AWG",
//   },
//   {
//     id: "a4f65722-65c4-4c28-b1f4-b8ed988bb205",
//     type: "deposit",
//     amount: "213.10",
//     currency: "STD",
//   },
//   {
//     id: "c6e5784b-0ca3-48d6-86e5-b5128af5a523",
//     type: "invoice",
//     amount: "116.11",
//     currency: "CUP CUC",
//   },
//   {
//     id: "c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd",
//     type: "invoice",
//     amount: "878.67",
//     currency: "HKD",
//   },
//   {
//     id: "a4a98b0e-b22c-438b-9f83-de2df52110c8",
//     type: "invoice",
//     amount: "725.03",
//     currency: "UYU UYI",
//   },
//   {
//     id: "b39bfa7a-0166-4c47-94d6-87d20590f746",
//     type: "payment",
//     amount: "405.45",
//     currency: "MDL",
//   },
// ];

// const TransactionHistory = ({ items }) => {
//   return (
//     <table className="transaction-history">
//       <thead>
//         <tr>
//           <th>Type</th>
//           <th>Amount</th>
//           <th>Currency</th>
//         </tr>
//       </thead>

//       <tbody>
//         {items.map((item) => (
//           <tr key={item.id}>
//             <td>{item.type}</td>
//             <td>{item.amount}</td>
//             <td>{item.currency}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// const userData = {
//   username: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const Profile = ({ name, tag, location, image, stats }) => {
//   return (
//     <div className="profile">
//       <div className="description">
//         <img src={image} alt="User avatar" className="avatar" />
//         <p className="name">{name}</p>
//         <p className="tag">@{tag}</p>
//         <p className="location">{location}</p>
//       </div>

//       <ul className="stats">
//         <li>
//           <span className="label">Followers</span>
//           <span className="value">{stats.followers}</span>
//         </li>
//         <li>
//           <span className="label">Views</span>
//           <span className="value">{stats.views}</span>
//         </li>
//         <li>
//           <span className="label">Likes</span>
//           <span className="value">{stats.likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default function App() {
//   // return <StatsWidget title="Upload stats" stats={stats} />;
//   // return <FriendList friends={friends} />;
//   // return <TransactionHistory items={transactions} />;
//   return (
//     <Profile
//       name={userData.username}
//       tag={userData.tag}
//       location={userData.location}
//       image={userData.avatar}
//       stats={userData.stats}
//     />
//   );
// }

// import { useEffect, useState } from "react";
// import { FaUser, FaPhone } from "react-icons/fa6";
// import * as Yup from "yup";
// import "./App.css";
// import { Field, Form, Formik, ErrorMessage } from "formik";

// const schema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   number: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
// });

// const App = () => {
//   const [contacts, setContacts] = useState(() => {
//     const saved = localStorage.getItem("con");
//     if (saved !== null) {
//       return JSON.parse(saved);
//     }
//     return [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ];
//   });

//   useEffect(() => {
//     localStorage.setItem("con", JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = (contact) => {
//     setContacts((contacts) => [
//       ...contacts,
//       {
//         id: Date.now(),
//         ...contact,
//       },
//     ]);
//   };

//   const deleteContact = (contactId) => {
//     setContacts((contacts) => contacts.filter((c) => c.id !== contactId));
//   };

//   const [filter, setFilter] = useState("");

//   const vContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <h1 className="title">Phonebook</h1>
//       <Formik
//         initialValues={{ name: "", number: "" }}
//         onSubmit={(values, actions) => {
//           addContact(values);
//           actions.resetForm();
//         }}
//         validationSchema={schema}
//       >
//         <Form className="form">
//           <label>
//             Name
//             <Field type="text" name="name" />
//             <ErrorMessage name="name" component="span" className="error" />
//           </label>
//           <label>
//             Number
//             <Field type="tel" name="number" />
//             <ErrorMessage name="number" component="span" className="error" />
//           </label>
//           <button>Add contact</button>
//         </Form>
//       </Formik>

//       <div className="searchBar">
//         <label>
//           Find contacts by name
//           <input
//             type="text"
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//           />
//         </label>
//       </div>

//       <ul className="contactList">
//         {vContacts.map((contact) => (
//           <li key={contact.id}>
//             <div>
//               <p>
//                 <FaUser /> {contact.name}
//               </p>
//               <p>
//                 <FaPhone /> {contact.number}
//               </p>
//             </div>
//             <button onClick={() => deleteContact(contact.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// import { Formik } from "formik";

// const LoginForm = () => {
//   return (
//     <Formik initialValues={{}} onSubmit={() => {}}>
//       ...
//     </Formik>
//   );
// };

import { useEffect, useState } from "react";
import axios from "axios";

const ArticleList = ({ items }) => (
  <ul>
    {items.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/searc1h?query=react"
        );
        setArticles(response.data.hits);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p style={{ fontSize: 20 }}>Loading data, please wait...</p>}
      {error && (
        <p style={{ color: "orangered", fontSize: 20 }}>
          Whoops, something went wrong! Please try reloading this page!
        </p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

export default App;
