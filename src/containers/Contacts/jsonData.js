export const otherAttributes = [
  { title: 'Mobile', value: 'mobile', type: 'phoneNumber' },
  { title: 'Home', value: 'home', type: 'phoneNumber' },
  { title: 'Office', value: 'office', type: 'office' },
  { title: 'Work', value: 'work', type: 'phoneNumber' },
  { title: 'Address', value: 'address', type: 'paragraph' },
  { title: 'Age', value: 'age', type: 'paragraph' },
  { title: 'Birth Date', value: 'birth', type: 'paragraph' },  
  { title: 'Notes', value: 'note', type: 'paragraph' }
];

const contactList = JSON.parse(
  `[{
  "id": 22143,
  "avatar": "https://pbs.twimg.com/profile_images/902645235360063488/YWcmrXcy_400x400.jpg",
  "firstName": "Benjamin",
  "lastName": "Jacobi",
  "name": "Benjamin Jacobi",
  "mobile": "(023) 302-3161 x60451",
  "home": "(136) 403-0476 x8388",
  "office": "Maryland",
  "work": "(399) 506-9438",
  "address": "479 Radford Street",
  "age": "80",
  "birth": "08-18-1937",
  "note": "Quisquam et nisi. Dicta in ut eos consequatur ipsum omnis. Quisquam doloremque error praesentium sapiente et vitae. Omnis facere sint nulla similique vel voluptatem officia deleniti."
}, {
  "id": 17385,
  "avatar": "https://pbs.twimg.com/profile_images/886298106127556608/kUIN3i-Q_400x400.jpg",
  "firstName": "Clementina",
  "lastName": "Hahn",
  "name": "Clementina Hahn",
  "mobile": "686.292.3548 x7219",
  "home": "447-343-4864 x414",
  "office": "Northern Virginia",
  "work": "299-721-6828 x856",
  "address": "3688 High Meadow Lane",
  "age": "85",
  "birth": "02-06-1932",
  "note": "Distinctio voluptas repellendus rerum temporibus deserunt et corrupti sint. Odit sit labore quia. Perferendis iure eos qui tempore ex saepe consequuntur accusamus ipsa. Eius consectetur nam quas. Laborum aperiam hic dolorum quae autem consequatur."
}, {
  "id": 85838,
  "avatar": "https://pbs.twimg.com/profile_images/884642700405952512/_3Cr9pfC_400x400.jpg",
  "firstName": "Clinton",
  "lastName": "Goyette",
  "name": "Clinton Goyette",
  "mobile": "(913) 127-1563 x082",
  "home": "(843) 501-8804",
  "office": "Maryland",
  "work": "732.111.8883",
  "address": "Lake Street 344",
  "age": "79",
  "birth": "10-09-1938",
  "note": "Maiores animi et quidem. Ducimus voluptate est consequatur ut vitae in. Ut fugit sit ab blanditiis ab occaecati soluta quis."
}, {
  "id": 2791,
  "avatar": "https://pbs.twimg.com/profile_images/2958998511/e0a93ca2a3b894e34d8bd7a735102987_400x400.jpeg",
  "firstName": "Forrest",
  "lastName": "Klein",
  "name": "Forrest Klein",
  "mobile": "174-628-5802 x8324",
  "home": "(047) 141-0247",
  "office": "Washington, D.C.",
  "work": "1-624-238-9252",
  "address": "Principal Street 344",
  "age": "85",
  "birth": "02-06-1932",
  "note": "Sit et non debitis. Quis atque facilis et sed. Illum adipisci deserunt corporis modi necessitatibus at numquam neque sint."
}, {
  "id": 67493,
  "avatar": "https://pbs.twimg.com/profile_images/521747547648311296/Z-2ftHoZ_400x400.png",
  "firstName": "General",
  "lastName": "Kub",
  "name": "General Kub",
  "mobile": "779.482.9824",
  "home": "(698) 858-0337 x3273",
  "office": "Washington, D.C.",
  "work": "881.768.7522",
  "address": "1894 Richison Drive",
  "age": "80",
  "birth": "06-19-1937",
  "note": "Quibusdam dolorem minima ea enim nostrum eos. Corrupti dolore velit molestiae nostrum error qui. Sit qui maxime sed quisquam rem cupiditate. Iste ex quidem. Ipsam et quia omnis facere blanditiis."
}, {
  "id": 75593,
  "avatar": "https://pbs.twimg.com/profile_images/712718765293576192/w0iI5EZV_400x400.jpg",
  "firstName": "Lon",
  "lastName": "Wunsch",
  "name": "Lon Wunsch",
  "mobile": "(792) 607-6366 x88975",
  "home": "447.683.3799 x38668",
  "office": "Maryland",
  "work": "(735) 859-7674",
  "address": "3222 Bedford Street",
  "age": "80",
  "birth": "03-16-1937",
  "note": "Velit non voluptas sed sit pariatur earum unde neque. Incidunt nam reprehenderit non mollitia. Incidunt quo illum modi ex eos consequuntur eius nihil itaque. Quis tenetur ratione repudiandae ea et architecto dolorem porro. Rem non consectetur ea iste."
}, {
  "id": 90096,
  "avatar": "https://pbs.twimg.com/profile_images/525293577782693889/8WJVuiIu_400x400.jpeg",
  "firstName": "Mabelle",
  "lastName": "Kling",
  "name": "Mabelle Kling",
  "mobile": "499-736-0779 x2409",
  "home": "1-910-529-7393 x222",
  "office": "Northern Virginia",
  "work": "905.098.6372",
  "address": "38 Bell Street",
  "age": "81",
  "birth": "07-16-1936", 
  "note": "Et et rerum placeat beatae doloribus earum et reiciendis. Nisi suscipit ad dolor. Tenetur hic quia nihil deleniti inventore. Blanditiis aliquam ea ea. Omnis consequatur itaque est rerum sed reiciendis laboriosam reiciendis. Consectetur ullam et laudantium at itaque aut qui et molestiae."
}, {
  "id": 15783,
  "avatar": "https://pbs.twimg.com/profile_images/484150615409299456/YmFXIh9k_400x400.jpeg",
  "firstName": "Maryse",
  "lastName": "Koss",
  "name": "Maryse Koss",
  "mobile": "668-920-9662 x610",
  "home": "075.864.1819 x8265",
  "office": "Washington, D.C.",
  "work": "468.534.0931",
  "address": "894 Happy Hollow Road",
  "age": "79",
  "birth": "07-24-1938",  
  "note": "Libero perferendis aut repudiandae quas. Omnis aut enim voluptas magnam harum quisquam illo aliquid aliquam. Dolor et et vel nihil quibusdam fugit facere adipisci aut. Repellat quia est beatae animi ipsa. Ad sit eligendi pariatur quia illo atque qui voluptatem excepturi."
}, {
  "id": 42122,
  "avatar": "https://pbs.twimg.com/profile_images/610295076032483328/DjgPn938_400x400.jpg",
  "firstName": "Maude",
  "lastName": "Grant",
  "name": "Maude Grant",
  "mobile": "1-077-505-0657",
  "home": "062.968.4841 x62748",
  "office": "Maryland",
  "work": "1-318-593-2619 x206",
  "address": "4427 Radford Street",
  "age": "80",
  "birth": "08-18-1937",
  "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."
}, {
  "id": 5869,
  "avatar": "https://pbs.twimg.com/profile_images/378800000739270832/ec47e11dab9a435d1c259ce6d7afcd44_400x400.png",
  "firstName": "Linda",
  "lastName": "Harris",
  "name": "Linda Harris",
  "mobile": "871.567.4877",
  "home": "(466) 574-3352",
  "office": "Northern Virginia",
  "work": "1-908-422-4964",
  "address": "1894 Richison Drive",
  "age": "79",
  "birth": "04-17-1938",
  "note": "Aut sequi quae omnis ut qui quaerat. Dolor et fugit blanditiis laudantium. Libero modi officiis consequatur corrupti reiciendis aut qui nemo doloribus. Consequatur voluptatibus quis vero numquam aspernatur a sit laborum voluptates."
}]`
);

export default class jsonData {
  constructor(size = 10) {
    this.size = size;
    this.datas = [];
  }
  dataModel(index) {
    return contactList[index];
  }
  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }
    return this.datas[index];
  }
  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this.datas
      .slice()
      .sort(
        (contact1, contact2) =>
          `${contact1.firstName}${contact1.LastName}`.toUpperCase() >
          `${contact2.firstName}${contact2.LastName}`.toUpperCase()
      );
  }

  getSize() {
    return this.size;
  }
}
