export const otherAttributes = [
  { title: 'Mobile', value: 'mobile', type: 'phoneNumber' },
  { title: 'Home', value: 'home', type: 'phoneNumber' },
  { title: 'Office', value: 'office', type: 'office' },
  { title: 'Work', value: 'work', type: 'phoneNumber' },
  { title: 'Address', value: 'address', type: 'paragraph' },
  { title: 'Age', value: 'age', type: 'paragraph' },
  { title: 'Birth Date', value: 'birth', type: 'paragraph' },
  { title: 'Notes', value: 'note', type: 'paragraph' },
];

const caregiverList = JSON.parse(
  `[{
  "id": 22144,
  "avatar": "https://pbs.twimg.com/profile_images/889913093102465024/-kpioWRr_400x400.jpg",
  "firstName": "Thomas",
  "lastName": "Anderson",
  "name": "Thomas Anderson",
  "mobile": "(023) 302-3161 x60451",
  "home": "(136) 403-0476 x8388",
  "office": "Maryland",
  "work": "(399) 506-9438",
  "address": "894 Happy Hollow Road",
  "age": "29",
  "birth": "07-24-1988",  
  "note": "Quisquam et nisi. Dicta in ut eos consequatur ipsum omnis. Quisquam doloremque error praesentium sapiente et vitae. Omnis facere sint nulla similique vel voluptatem officia deleniti."
}, {
  "id": 17386,
  "avatar": "https://pbs.twimg.com/profile_images/680821432008445952/5KVM51xl_400x400.jpg",
  "firstName": "James",
  "lastName": "Taylor",
  "name": "James Taylor",
  "mobile": "686.292.3548 x7219",
  "home": "447-343-4864 x414",
  "office": "Northern Virginia",
  "work": "299-721-6828 x856",
  "address": "4427 Radford Street",
  "age": "30",
  "birth": "08-18-1987",
  "note": "Distinctio voluptas repellendus rerum temporibus deserunt et corrupti sint. Odit sit labore quia. Perferendis iure eos qui tempore ex saepe consequuntur accusamus ipsa. Eius consectetur nam quas. Laborum aperiam hic dolorum quae autem consequatur."
}, {
  "id": 85839,
  "avatar": "https://pbs.twimg.com/profile_images/856249108885110784/97cssCek_400x400.jpg",
  "firstName": "Barbara",
  "lastName": "Moore",
  "name": "Barbara Moore",
  "mobile": "(913) 127-1563 x082",
  "home": "(843) 501-8804",
  "office": "Maryland",
  "work": "732.111.8883",
  "address": "1894 Richison Drive",
  "age": "40",
  "birth": "06-19-1977",
  "note": "Maiores animi et quidem. Ducimus voluptate est consequatur ut vitae in. Ut fugit sit ab blanditiis ab occaecati soluta quis."
}, {
  "id": 2792,
  "avatar": "https://pbs.twimg.com/profile_images/920653061449687041/iGZBBN9U_400x400.jpg",
  "firstName": "Linda",
  "lastName": "Miller",
  "name": "Linda Miller",
  "mobile": "174-628-5802 x8324",
  "home": "(047) 141-0247",
  "office": "Washington, D.C.",
  "work": "1-624-238-9252",  
  "address": "38 Bell Street",
  "age": "31",
  "birth": "07-16-1986",  
  "note": "Sit et non debitis. Quis atque facilis et sed. Illum adipisci deserunt corporis modi necessitatibus at numquam neque sint."
}, {
  "id": 67494,
  "avatar": "https://pbs.twimg.com/profile_images/907948472447447040/0bB3zGaa_400x400.jpg",
  "firstName": "Patricia",
  "lastName": "Davis",
  "name": "Patricia Davis",
  "mobile": "779.482.9824",
  "home": "(698) 858-0337 x3273",
  "office": "Washington, D.C.",
  "work": "881.768.7522",
  "address": "3222 Bedford Street",
  "age": "30",
  "birth": "03-16-1987",
  "note": "Quibusdam dolorem minima ea enim nostrum eos. Corrupti dolore velit molestiae nostrum error qui. Sit qui maxime sed quisquam rem cupiditate. Iste ex quidem. Ipsam et quia omnis facere blanditiis."
}, {
  "id": 75594,
  "avatar": "https://pbs.twimg.com/profile_images/864137713204830208/qoJHSG9Q_400x400.jpg",
  "firstName": "Lara",
  "lastName": "Jones",
  "name": "Lara Jones",
  "mobile": "(792) 607-6366 x88975",
  "home": "447.683.3799 x38668",
  "office": "Maryland",
  "work": "(735) 859-7674",
  "address": "8986 Bedford Street",
  "age": "30",
  "birth": "03-16-1987", 
  "note": "Velit non voluptas sed sit pariatur earum unde neque. Incidunt nam reprehenderit non mollitia. Incidunt quo illum modi ex eos consequuntur eius nihil itaque. Quis tenetur ratione repudiandae ea et architecto dolorem porro. Rem non consectetur ea iste."
}, {
  "id": 90097,
  "avatar": "https://pbs.twimg.com/profile_images/818154774189277188/X0zFnyC3_400x400.jpg",
  "firstName": "Mary",
  "lastName": "Smith",
  "name": "Mary Smith",
  "mobile": "499-736-0779 x2409",
  "home": "1-910-529-7393 x222",
  "office": "Northern Virginia",
  "work": "905.098.6372",
  "address": "1402 Holly Street",
  "age": "35",
  "birth": "02-06-1983", 
  "note": "Et et rerum placeat beatae doloribus earum et reiciendis. Nisi suscipit ad dolor. Tenetur hic quia nihil deleniti inventore. Blanditiis aliquam ea ea. Omnis consequatur itaque est rerum sed reiciendis laboriosam reiciendis. Consectetur ullam et laudantium at itaque aut qui et molestiae."
}, {
  "id": 15784,
  "avatar": "https://pbs.twimg.com/profile_images/894021283582750720/HoGy2kAV_400x400.jpg",
  "firstName": "Allison",
  "lastName": "Johnson",
  "name": "Allison Johnson",
  "mobile": "668-920-9662 x610",
  "home": "075.864.1819 x8265",
  "office": "Washington, D.C.",
  "work": "468.534.0931",
  "address": "3688 High Meadow Lane",
  "age": "35",
  "birth": "02-06-1982",
  "note": "Libero perferendis aut repudiandae quas. Omnis aut enim voluptas magnam harum quisquam illo aliquid aliquam. Dolor et et vel nihil quibusdam fugit facere adipisci aut. Repellat quia est beatae animi ipsa. Ad sit eligendi pariatur quia illo atque qui voluptatem excepturi."
}, {
  "id": 42123,
  "avatar": "https://pbs.twimg.com/profile_images/880575542696738816/7GwMagUn_400x400.jpg",
  "firstName": "Catherine",
  "lastName": "Williams",
  "name": "Catherine Williams",
  "mobile": "1-077-505-0657",
  "home": "062.968.4841 x62748",
  "address": "Lake Street 344",
  "office": "Maryland",
  "work": "1-318-593-2619 x206",
  "address": "Lake Street 344",
  "age": "29",
  "birth": "10-09-1988",
  "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."
}, {
  "id": 5870,
  "avatar": "https://pbs.twimg.com/profile_images/378800000476404435/a40d6aea848a48b619fb054255016a80_400x400.jpeg",
  "firstName": "John",
  "lastName": "Brown",
  "name": "John Brown",
  "mobile": "871.567.4877",
  "home": "(466) 574-3352",
  "office": "Northern Virginia",
  "work": "1-908-422-4964",
  "address": "Principal Street 344",
  "age": "35",
  "birth": "02-06-1982",  
  "note": "Aut sequi quae omnis ut qui quaerat. Dolor et fugit blanditiis laudantium. Libero modi officiis consequatur corrupti reiciendis aut qui nemo doloribus. Consequatur voluptatibus quis vero numquam aspernatur a sit laborum voluptates."
}]`
);

export default class caregiversData {
  constructor(size = 10) {
    this.size = size;
    this.datas = [];
  }
  dataModel(index) {
    return caregiverList[index];
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
        (caregiver1, caregiver2) =>
          `${caregiver1.firstName}${caregiver1.LastName}`.toUpperCase() >
          `${caregiver2.firstName}${caregiver2.LastName}`.toUpperCase()
      );
  }

  getSize() {
    return this.size;
  }
}
