import {
  Container,
  Row,
  Col,
  Badge,
  ListGroup,
  Button,
  Card,
} from "react-bootstrap";
import Bcard from "./components/Bcard";
import Blistgroup from "./components/Blistgroup";
import AvatarBox from "./components/AvatarBox";

const App = () => {

  const users = [
    {
      id: 1,
      isLogged: true,
      avatar:
        "https://res.cloudinary.com/united-app/image/upload/v1638879014/avatars/face3_cbnzio.png",
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      isLogged: false,
      avatar:
        "https://res.cloudinary.com/united-app/image/upload/v1638879014/avatars/face2_f8i1fn.png",
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      isLogged: false,
      avatar:
        "https://res.cloudinary.com/united-app/image/upload/v1638879014/avatars/face4_dx3nu6.png",
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    {
      id: 4,
      isLogged: false,
      avatar:
        "https://res.cloudinary.com/united-app/image/upload/v1638879014/avatars/face5_faljpu.png",
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
    {
      id: 5,
      isLogged: true,
      avatar:
        "https://res.cloudinary.com/united-app/image/upload/v1638879015/avatars/face1_rhjego.png",
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    },
    {
      id: 6,
      isLogged: false,
      avatar:
        "https://res.cloudinary.com/united-app/image/upload/v1638879014/avatars/character7_u3r1ec.png",
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478",
        },
      },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      },
    },
    {
      id: 7,
      isLogged: false,
      avatar:
        "https://res.cloudinary.com/united-app/image/upload/v1638879014/avatars/character6_bnnhx1.png",
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo: {
          lat: "24.8918",
          lng: "21.8984",
        },
      },
      phone: "210.067.6132",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
      },
    },
    {
      id: 8,
      isLogged: true,
      avatar:
        "https://res.cloudinary.com/united-app/image/upload/v1638879014/avatars/character3_lpd4gi.png",
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677",
        },
      },
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
      company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers",
      },
    },
    {
      id: 9,
      isLogged: false,
      avatar:
        "https://res.cloudinary.com/united-app/image/upload/v1638879014/avatars/character4_vk2ven.png",
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo: {
          lat: "24.6463",
          lng: "-168.8889",
        },
      },
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies",
      },
    },
    {
      id: 10,
      isLogged: true,
      avatar:
        "https://res.cloudinary.com/united-app/image/upload/v1638879014/avatars/character2_iwlus2.png",
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
  ];
  const sqlabs = {lat:32.08657179353594, lon:34.80042191008685};

  return (
    <>
      <Container>
        <Row>
          <Col lg={12} xs={12} md={6}>
            <h1>Users</h1>
            <br />

            {users.length > 0 ? (
              <>

                <Container>
                  <Row>
                      {
                        users.map((user) => (
                          <AvatarBox user={user} home={sqlabs} />
                        ))
                      }
                  </Row>
                </Container>

                {/* <Container>
                  <Row>
                    {users.map((user) => (
                      <Bcard user={user} />
                    ))}
                  </Row>
                </Container> */}

                {/* <ListGroup as="ol" numbered>
                  {users.map((user) => (
                    <Blistgroup user={user} />
                  ))}
                </ListGroup> */}
              </>
            ) : (
              <>
                <p>No users found.</p>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
