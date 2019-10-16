// import faker from 'faker';
import moment from 'moment';

// const titles = ['All Day Event', 'Long Event', 'Med manag', 'PRN', 'Dinner', 'PRN'];
// class jsonData {
//   constructor(size){
//     this.size = size || 2000;
//     this.datas = [];
//   }
//   dataModel(index) {
//     const title = titles[faker.random.number(titles.length - 1)];
//     const currentDate = new Date();
//     const dateA = new Date(currentDate.setDate((currentDate.getDate() - 30)));
//     const dateB = new Date(currentDate.setDate((currentDate.getDate() + 30)));
//     const start = faker.date.between(dateA, dateB);
//     return {
//       id: index,
//       title,
//       allDay:faker.random.boolean(),
//       desc: `desc of ${title}`,
//       start,
//       end: start,
//     }
//   }
//   getObjectAt(index) {
//     if (index < 0 || index > this.size){
//       return undefined;
//     }
//     if (this.datas[index] === undefined) {
//       this.datas[index] = this.dataModel(index);
//     }
//     return this.datas[index];
//   }
//   getAll() {
//     if (this.datas.length < this.size) {
//       for (let i = 0; i < this.size; i++) {
//         this.getObjectAt(i);
//       }
//     }
//     return this.datas;
//   }

//   getSize() {
//     return this.size;
//   }

// }
// const JsonData = new jsonData(50);
// console.log(JSON.stringify(JsonData.getAll()));
// export default JsonData.getAll();

// export default JSON.parse(``);
const events = JSON.parse(
  `[{
  "id": 0,
  "title": "Dinner",
  "customClass": "first-level",
  "desc": "desc of Dinner",
  "start": "2017-11-13T15:41:31.046Z",
  "end": "2017-11-13T16:41:31.046Z"
}, {
  "id": 1,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "customClass": "first-level",
  "desc": "desc of Med manag",
  "start": "2017-11-15T18:53:31.353Z",
  "end": "2017-11-15T19:53:31.353Z"
}, {
  "id": 2,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level4",   
  "desc": "desc of PRN",
  "start": "2017-11-09T12:50:35.587Z",
  "end": "2017-11-09T13:50:35.587Z"
}, {
  "id": 3,
  "title": "Dinner",
  "customClass": "first-level",
  "desc": "desc of Dinner",
  "start": "2017-11-09T15:26:27.020Z",
  "end": "2017-11-09T16:26:27.020Z"
}, {
  "id": 4,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level",    
  "desc": "desc of Med manag",
  "start": "2017-11-08T12:19:19.302Z",
  "end": "2017-11-08T13:19:19.302Z"
}, {
  "id": 5,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level",     
  "desc": "desc of Med manag",
  "start": "2017-11-10T11:21:30.519Z",
  "end": "2017-11-10T12:21:30.519Z"
}, {
  "id": 6,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of PRN",
  "start": "2017-11-09T12:33:34.094Z",
  "end": "2017-11-09T13:33:34.094Z"
}, {
  "id": 7,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of PRN",
  "start": "2017-11-11T19:08:51.789Z",
  "end": "2017-11-11T20:08:51.789Z"
}, {
  "id": 8,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level",    
  "desc": "desc of Med manag",
  "start": "2017-11-11T12:53:11.477Z",
  "end": "2017-11-11T13:53:11.477Z"
}, {
  "id": 9,
  "title": "Laundry", 
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of Laundry",
  "start": "2017-11-07T17:13:58.232Z",
  "end": "2017-11-07T19:13:58.232Z"
}, {
  "id": 10,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level",    
  "desc": "desc of Med manag",
  "start": "2017-11-10T20:49:56.502Z",
  "end": "2017-11-10T21:49:56.502Z"
}, {
  "id": 11,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of PRN",
  "start": "2017-10-25T17:37:46.342Z",
  "end": "2017-10-25T18:37:46.342Z"
}, {
  "id": 12,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of PRN",
  "start": "2017-10-24T19:55:43.440Z",
  "end": "2017-10-24T20:55:43.440Z"
}, {
  "id": 13,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level4",     
  "desc": "desc of Med manag",
  "start": "2017-11-10T12:26:44.401Z",
  "end": "2017-11-10T13:26:44.401Z"
}, {
  "id": 14,
  "title": "Laundry", 
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of Laundry",
  "start": "2017-11-14T15:13:00.444Z",
  "end": "2017-11-14T17:13:00.444Z"
}, {
  "id": 15,
  "title": "Dinner",
  "showMultiDayTimes": true,
  "customClass": "first-level",  
  "desc": "desc of Dinner",
  "start": "2017-11-15T15:07:34.588Z",
  "end": "2017-11-15T16:07:34.588Z"
}, {
  "id": 16,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of Med manag",
  "start": "2017-11-16T15:51:03.042Z",
  "end": "2017-11-16T16:51:03.042Z"
}, {
  "id": 17,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of PRN",
  "start": "2017-11-11T15:44:43.848Z",
  "end": "2017-11-11T16:44:43.848Z"
}, {
  "id": 18,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of Med manag",
  "start": "2017-11-09T13:56:32.981Z",
  "end": "2017-11-09T14:56:32.981Z"
}, {
  "id": 19,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level4",   
  "desc": "desc of PRN",
  "start": "2017-11-09T18:39:50.313Z",
  "end": "2017-11-09T19:39:50.313Z"
}, {
  "id": 20,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of Med manag",
  "start": "2017-11-12T21:47:36.119Z",
  "end": "2017-11-12T22:47:36.119Z"
}, {
  "id": 21,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level2",   
  "desc": "desc of PRN",
  "start": "2017-11-09T12:53:59.669Z",
  "end": "2017-11-09T13:53:59.669Z"
}, {
  "id": 22,
  "title": "Laundry", 
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of Laundry",
  "start": "2017-11-08T13:37:30.150Z",
  "end": "2017-11-08T17:37:30.150Z"
}, {
  "id": 23,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of Med manag",
  "start": "2017-10-25T15:47:41.647Z",
  "end": "2017-10-25T16:47:41.647Z"
}, {
  "id": 24,
  "title": "Long Event",
  "showMultiDayTimes": true,
  "customClass": "first-level",    
  "desc": "desc of Long Event",
  "start": "2017-10-20T10:37:22.294Z",
  "end": "2017-10-20T13:37:22.294Z"
}, {
  "id": 25,
  "title": "Long Event",
  "showMultiDayTimes": true,
  "customClass": "first-level",    
  "desc": "desc of Long Event",
  "start": "2017-10-24T15:18:23.139Z",
  "end": "2017-10-24T17:18:23.139Z"
}, {
  "id": 26,
  "title": "Laundry", 
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of Laundry",
  "start": "2017-11-18T10:42:32.376Z",
  "end": "2017-11-18T10:42:32.376Z"
}, {
  "id": 27,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of PRN",
  "start": "2017-11-13T10:24:45.567Z",
  "end": "2017-11-13T11:24:45.567Z"
}, {
  "id": 28,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level2",   
  "desc": "desc of PRN",
  "start": "2017-11-09T16:02:57.478Z",
  "end": "2017-11-09T17:02:57.478Z"
}, {
  "id": 29,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of Med manag",
  "start": "2017-11-13T18:10:48.180Z",
  "end": "2017-11-13T19:10:48.180Z"
}, {
  "id": 30,
  "title": "Laundry", 
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of Laundry",
  "start": "2017-11-17T15:41:16.372Z",
  "end": "2017-11-17T17:41:16.372Z"
}, {
  "id": 31,
  "title": "Long Event",
  "showMultiDayTimes": true,
  "customClass": "first-level",     
  "desc": "desc of Long Event",
  "start": "2017-11-08T18:23:07.322Z",
  "end": "2017-11-08T20:23:07.322Z"
}, {
  "id": 32,
  "title": "Long Event",
  "showMultiDayTimes": true,
  "customClass": "first-level",     
  "desc": "desc of Long Event",
  "start": "2017-10-23T14:20:36.858Z",
  "end": "2017-10-23T17:20:36.858Z"
}, {
  "id": 33,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of Med manag",
  "start": "2017-10-26T15:10:32.983Z",
  "end": "2017-10-26T17:10:32.983Z"
}, {
  "id": 34,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of Med manag",
  "start": "2017-11-06T14:57:24.817Z",
  "end": "2017-11-06T15:57:24.817Z"
}, {
  "id": 35,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of Med manag",
  "start": "2017-11-05T16:58:20.674Z",
  "end": "2017-11-05T17:58:20.674Z"
}, {
  "id": 36,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of PRN",
  "start": "2017-10-26T14:00:39.158Z",
  "end": "2017-10-26T15:00:39.158Z"
}, {
  "id": 37,
  "title": "Long Event",
  "showMultiDayTimes": true,
  "customClass": "first-level",    
  "desc": "desc of Long Event",
  "start": "2017-11-09T17:15:18.611Z",
  "end": "2017-11-09T20:15:18.611Z"
}, {
  "id": 38,
  "title": "Long Event",
  "showMultiDayTimes": true,
  "customClass": "first-level2",   
  "desc": "desc of Long Event",
  "start": "2017-11-08T17:42:35.124Z",
  "end": "2017-11-08T20:42:35.124Z"
}, {
  "id": 39,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of PRN",
  "start": "2017-10-20T18:40:49.210Z",
  "end": "2017-10-20T19:40:49.210Z"
}, {
  "id": 40,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of Med manag",
  "start": "2017-11-05T12:36:22.540Z",
  "end": "2017-11-05T13:36:22.540Z"
}, {
  "id": 41,
  "title": "Caregiver: Allison Johnson",
  "showMultiDayTimes": true,  
  "customClass": "work-day",
  "desc": "desc of Med manag",
  "start": "2017-11-06T11:00:00.000Z",
  "end": "2017-11-06T21:00:00.000Z"  
}, {
  "id": 42,
  "title": "Caregiver: Allison Johnson",
  "showMultiDayTimes": true,  
  "customClass": "work-day",
  "desc": "desc of Work Day",
  "start": "2017-11-07T12:00:00.000Z",
  "end": "2017-11-07T22:00:00.000Z"  
}, {
  "id": 43,
  "title": "Caregiver: Allison Johnson",
  "showMultiDayTimes": true,  
  "customClass": "work-day",
  "desc": "desc of Work Day",
  "start": "2017-11-08T11:00:00.000Z",
  "end": "2017-11-08T21:00:00.000Z"
}, {
  "id": 44,
  "title": "Caregiver: Allison Johnson",
  "showMultiDayTimes": true,   
  "customClass": "work-day",
  "desc": "desc of Work Day",
  "start": "2017-11-09T12:00:00.000Z",
  "end": "2017-11-09T21:00:00.000Z"  
}, {
  "id": 45,
  "title": "Caregiver: Allison Johnson",
  "showMultiDayTimes": true,  
  "customClass": "work-day",
  "desc": "desc of Work Day",
  "start": "2017-11-10T11:00:00.000Z",
  "end": "2017-11-10T22:00:00.000Z"  
}, {
  "id": 46,
  "title": "Laundry", 
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of Laundry",
  "start": "2017-11-10T14:41:16.372Z",
  "end": "2017-11-10T18:41:16.372Z"  
}, {
  "id": 47,
  "title": "PRN", 
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of PRN",
  "start": "2017-11-10T19:41:16.372Z",
  "end": "2017-11-10T20:41:16.372Z" 
}, {  
  "id": 48,
  "title": "Caregiver: Mary Smith",
  "showMultiDayTimes": true,  
  "customClass": "work-day2",
  "desc": "desc of Med manag",
  "start": "2017-11-06T11:00:00.000Z",
  "end": "2017-11-06T21:00:00.000Z"  
}, {
  "id": 49,
  "title": "Caregiver: Mary Smith",
  "showMultiDayTimes": true,  
  "customClass": "work-day2",
  "desc": "desc of Work Day",
  "start": "2017-11-07T12:00:00.000Z",
  "end": "2017-11-07T22:00:00.000Z"  
}, {
  "id": 50,
  "title": "Caregiver: Mary Smith",
  "showMultiDayTimes": true,  
  "customClass": "work-day2",
  "desc": "desc of Work Day",
  "start": "2017-11-08T12:00:00.000Z",
  "end": "2017-11-08T21:00:00.000Z"
}, {
  "id": 51,
  "title": "Caregiver: Mary Smith",
  "showMultiDayTimes": true,   
  "customClass": "work-day2",
  "desc": "desc of Work Day",
  "start": "2017-11-09T12:00:00.000Z",
  "end": "2017-11-09T21:00:00.000Z"  
}, {
  "id": 52,
  "title": "Caregiver: Mary Smith",
  "showMultiDayTimes": true,  
  "customClass": "work-day2",
  "desc": "desc of Work Day",
  "start": "2017-11-10T11:00:00.000Z",
  "end": "2017-11-10T22:00:00.000Z" 
}, {
  "id": 53,
  "title": "Long Event",
  "showMultiDayTimes": true,
  "customClass": "first-level2",     
  "desc": "desc of Long Event",
  "start": "2017-11-06T18:20:36.858Z",
  "end": "2017-11-06T20:20:36.858Z" 
}, {
  "id": 54,
  "title": "Long Event",
  "showMultiDayTimes": true,
  "customClass": "first-level2",    
  "desc": "desc of Long Event",
  "start": "2017-11-07T16:18:23.139Z",
  "end": "2017-11-07T18:18:23.139Z"
}, {
  "id": 55,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level2",   
  "desc": "desc of Med manag",
  "start": "2017-11-08T13:47:41.647Z",
  "end": "2017-11-08T14:47:41.647Z" 
}, {
  "id": 56,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level2",   
  "desc": "desc of Med manag",
  "start": "2017-11-07T18:55:43.440Z",
  "end": "2017-11-07T19:55:43.440Z"
}, {
  "id": 57,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level2",   
  "desc": "desc of PRN",
  "start": "2017-11-09T17:37:46.342Z",
  "end": "2017-11-09T18:37:46.342Z"
}, {
  "id": 58,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level2",   
  "desc": "desc of PRN",
  "start": "2017-11-10T16:00:39.158Z",
  "end": "2017-11-10T17:00:39.158Z"
}, {
  "id": 59,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level2",   
  "desc": "desc of Med manag",
  "start": "2017-11-10T18:10:32.983Z",
  "end": "2017-11-10T19:10:32.983Z"  
}, {
  "id": 60,
  "title": "Caregiver: Catherine Williams",
  "showMultiDayTimes": true,  
  "customClass": "work-day3",
  "desc": "desc of Work Day",
  "start": "2017-11-06T11:00:00.000Z",
  "end": "2017-11-06T21:00:00.000Z"  
}, {
  "id": 61,
  "title": "Caregiver: Catherine Williams",
  "showMultiDayTimes": true,  
  "customClass": "work-day3",
  "desc": "desc of Work Day",
  "start": "2017-11-07T12:00:00.000Z",
  "end": "2017-11-07T22:00:00.000Z"  
}, {
  "id": 62,
  "title": "Caregiver: Catherine Williams",
  "showMultiDayTimes": true,  
  "customClass": "work-day3",
  "desc": "desc of Work Day",
  "start": "2017-11-08T11:00:00.000Z",
  "end": "2017-11-08T21:00:00.000Z"
}, {
  "id": 63,
  "title": "Caregiver: Catherine Williams",
  "showMultiDayTimes": true,   
  "customClass": "work-day3",
  "desc": "desc of Work Day",
  "start": "2017-11-09T12:00:00.000Z",
  "end": "2017-11-09T21:00:00.000Z"  
}, {
  "id": 64,
  "title": "Caregiver: Catherine Williams",
  "showMultiDayTimes": true,  
  "customClass": "work-day3",
  "desc": "desc of Work Day",
  "start": "2017-11-10T11:00:00.000Z",
  "end": "2017-11-10T22:00:00.000Z"  
}, {
  "id": 65,
  "title": "Laundry", 
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of Laundry",
  "start": "2017-11-10T13:41:16.372Z",
  "end": "2017-11-10T17:41:16.372Z"  
}, {
  "id": 66,
  "title": "PRN", 
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of PRN",
  "start": "2017-11-10T18:41:16.372Z",
  "end": "2017-11-10T19:41:16.372Z" 
}, {  
  "id": 67,
  "title": "Caregiver: John Brown",
  "showMultiDayTimes": true,  
  "customClass": "work-day4",
  "desc": "desc of Med manag",
  "start": "2017-11-06T11:00:00.000Z",
  "end": "2017-11-06T21:00:00.000Z"  
}, {
  "id": 68,
  "title": "Caregiver: John Brown",
  "showMultiDayTimes": true,  
  "customClass": "work-day4",
  "desc": "desc of Work Day",
  "start": "2017-11-07T12:00:00.000Z",
  "end": "2017-11-07T22:00:00.000Z"  
}, {
  "id": 69,
  "title": "Caregiver: John Brown",
  "showMultiDayTimes": true,  
  "customClass": "work-day4",
  "desc": "desc of Work Day",
  "start": "2017-11-08T12:00:00.000Z",
  "end": "2017-11-08T21:00:00.000Z"
}, {
  "id": 70,
  "title": "Caregiver: John Brown",
  "showMultiDayTimes": true,   
  "customClass": "work-day4",
  "desc": "desc of Work Day",
  "start": "2017-11-09T12:00:00.000Z",
  "end": "2017-11-09T21:00:00.000Z"  
}, {
  "id": 71,
  "title": "Caregiver: John Brown",
  "showMultiDayTimes": true,  
  "customClass": "work-day4",
  "desc": "desc of Work Day",
  "start": "2017-11-10T11:00:00.000Z",
  "end": "2017-11-10T22:00:00.000Z" 
}, {
  "id": 72,
  "title": "Long Event",
  "showMultiDayTimes": true,
  "customClass": "first-level4",     
  "desc": "desc of Long Event",
  "start": "2017-11-06T14:20:36.858Z",
  "end": "2017-11-06T16:20:36.858Z" 
}, {
  "id": 73,
  "title": "Long Event",
  "showMultiDayTimes": true,
  "customClass": "first-level4",    
  "desc": "desc of Long Event",
  "start": "2017-11-07T14:18:23.139Z",
  "end": "2017-11-07T16:18:23.139Z"
}, {
  "id": 74,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level4",   
  "desc": "desc of Med manag",
  "start": "2017-11-08T14:47:41.647Z",
  "end": "2017-11-08T15:47:41.647Z" 
}, {
  "id": 75,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level4",   
  "desc": "desc of Med manag",
  "start": "2017-11-07T17:55:43.440Z",
  "end": "2017-11-07T18:55:43.440Z"
}, {
  "id": 76,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level4",   
  "desc": "desc of PRN",
  "start": "2017-11-09T16:37:46.342Z",
  "end": "2017-11-09T17:37:46.342Z"
}, {
  "id": 77,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level4",   
  "desc": "desc of PRN",
  "start": "2017-11-10T20:00:39.158Z",
  "end": "2017-11-10T21:00:39.158Z"
}, {
  "id": 78,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level4",   
  "desc": "desc of Med manag",
  "start": "2017-11-10T18:10:32.983Z",
  "end": "2017-11-10T19:10:32.983Z" 
}, {
  "id": 79,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of PRN",
  "start": "2017-11-06T14:00:39.158Z",
  "end": "2017-11-06T15:00:39.158Z"  
}, {
  "id": 80,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of Med manag",
  "start": "2017-11-06T19:55:43.440Z",
  "end": "2017-11-06T20:55:43.440Z"
}, {
  "id": 81,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of Med manag",
  "start": "2017-11-07T20:55:43.440Z",
  "end": "2017-11-07T21:55:43.440Z" 
}, {
  "id": 82,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of Med manag",
  "start": "2017-11-08:55:43.440Z",
  "end": "2017-11-08T12:55:43.440Z"  
}, {
  "id": 83,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of Med manag",
  "start": "2017-11-09T15:55:43.440Z",
  "end": "2017-11-09T16:55:43.440Z" 
}, {
  "id": 84,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of PRN",
  "start": "2017-11-08T17:37:46.342Z",
  "end": "2017-11-08T18:37:46.342Z"
}, {
  "id": 85,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of PRN",
  "start": "2017-11-07T17:37:46.342Z",
  "end": "2017-11-07T18:37:46.342Z"
}, {
  "id": 86,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of Med manag",
  "start": "2017-11-09T17:55:43.440Z",
  "end": "2017-11-09T18:55:43.440Z"
}, {
  "id": 87,
  "title": "Caregiver: Allison Johnson",
  "showMultiDayTimes": true,  
  "customClass": "work-day",
  "desc": "desc of Work Day",
  "start": "2017-11-05T12:00:00.000Z",
  "end": "2017-11-05T20:00:00.000Z" 
}, {
  "id": 88,
  "title": "Caregiver: Allison Johnson",
  "showMultiDayTimes": true,  
  "customClass": "work-day",
  "desc": "desc of Work Day",
  "start": "2017-11-11T11:00:00.000Z",
  "end": "2017-11-11T21:00:00.000Z"  
}, {
  "id": 89,
  "title": "Caregiver: Mary Smith",
  "showMultiDayTimes": true,  
  "customClass": "work-day2",
  "desc": "desc of Work Day",
  "start": "2017-11-05T12:00:00.000Z",
  "end": "2017-11-05T20:00:00.000Z" 
}, {
  "id": 90,
  "title": "Caregiver: Mary Smith",
  "showMultiDayTimes": true,  
  "customClass": "work-day2",
  "desc": "desc of Work Day",
  "start": "2017-11-11T11:00:00.000Z",
  "end": "2017-11-11T21:00:00.000Z"     
}, {
  "id": 91,
  "title": "Caregiver: Catherine Williams",
  "showMultiDayTimes": true,  
  "customClass": "work-day3",
  "desc": "desc of Work Day",
  "start": "2017-11-05T12:00:00.000Z",
  "end": "2017-11-05T20:00:00.000Z" 
}, {
  "id": 92,
  "title": "Caregiver: Catherine Williams",
  "showMultiDayTimes": true,  
  "customClass": "work-day3",
  "desc": "desc of Work Day",
  "start": "2017-11-11T11:00:00.000Z",
  "end": "2017-11-11T21:00:00.000Z"  
}, {
  "id": 93,
  "title": "Caregiver: John Brown",
  "showMultiDayTimes": true,  
  "customClass": "work-day4",
  "desc": "desc of Work Day",
  "start": "2017-11-05T12:00:00.000Z",
  "end": "2017-11-05T20:00:00.000Z" 
}, {
  "id": 94,
  "title": "Caregiver: John Brown",
  "showMultiDayTimes": true,  
  "customClass": "work-day4",
  "desc": "desc of Work Day",
  "start": "2017-11-11T11:00:00.000Z",
  "end": "2017-11-11T21:00:00.000Z"
}, {
  "id": 95,
  "title": "Long Event",
  "showMultiDayTimes": true,
  "customClass": "first-level4",     
  "desc": "desc of Long Event",
  "start": "2017-11-06T14:20:36.858Z",
  "end": "2017-11-06T16:20:36.858Z" 
}, {
  "id": 96,
  "title": "Long Event",
  "showMultiDayTimes": true,
  "customClass": "first-level4",    
  "desc": "desc of Long Event",
  "start": "2017-11-07T14:18:23.139Z",
  "end": "2017-11-07T16:18:23.139Z"
}, {
  "id": 97,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level4",   
  "desc": "desc of Med manag",
  "start": "2017-11-11T14:47:41.647Z",
  "end": "2017-11-11T15:47:41.647Z" 
}, {
  "id": 98,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level2",   
  "desc": "desc of Med manag",
  "start": "2017-11-05T17:55:43.440Z",
  "end": "2017-11-05T18:55:43.440Z"
}, {
  "id": 99,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level4",   
  "desc": "desc of PRN",
  "start": "2017-11-05T16:37:46.342Z",
  "end": "2017-11-05T17:37:46.342Z"
}, {
  "id": 100,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level4",   
  "desc": "desc of PRN",
  "start": "2017-11-05T12:00:39.158Z",
  "end": "2017-11-05T13:00:39.158Z"
}, {
  "id": 101,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level2",   
  "desc": "desc of Med manag",
  "start": "2017-11-05T15:10:32.983Z",
  "end": "2017-11-05T16:10:32.983Z" 
}, {
  "id": 102,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of PRN",
  "start": "2017-11-11T14:00:39.158Z",
  "end": "2017-11-11T15:00:39.158Z"  
}, {
  "id": 103,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of Med manag",
  "start": "2017-11-11T18:55:43.440Z",
  "end": "2017-11-11T19:55:43.440Z"
}, {
  "id": 104,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level2",   
  "desc": "desc of Med manag",
  "start": "2017-11-05T12:55:43.440Z",
  "end": "2017-11-05T13:55:43.440Z" 
}, {
  "id": 105,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of Med manag",
  "start": "2017-11-11:55:43.440Z",
  "end": "2017-11-11T12:55:43.440Z"  
}, {
  "id": 106,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of Med manag",
  "start": "2017-11-11T15:55:43.440Z",
  "end": "2017-11-11T16:55:43.440Z" 
}, {
  "id": 107,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of PRN",
  "start": "2017-11-11T17:37:46.342Z",
  "end": "2017-11-11T18:37:46.342Z"
}, {
  "id": 108,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of PRN",
  "start": "2017-11-05T12:37:46.342Z",
  "end": "2017-11-05T13:37:46.342Z"
}, {
  "id": 109,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of Med manag",
  "start": "2017-11-05T17:55:43.440Z",
  "end": "2017-11-05T18:55:43.440Z" 
}, {
  "id": 110,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level2",   
  "desc": "desc of PRN",
  "start": "2017-11-11T20:00:39.158Z",
  "end": "2017-11-11T21:00:39.158Z"
}, {
  "id": 111,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level2",   
  "desc": "desc of Med manag",
  "start": "2017-11-11T18:10:32.983Z",
  "end": "2017-11-11T19:10:32.983Z" 
}, {
  "id": 112,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of Med manag",
  "start": "2017-11-06T11:55:43.440Z",
  "end": "2017-11-06T12:55:43.440Z" 
}, {
  "id": 113,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of PRN",
  "start": "2017-11-06T17:37:46.342Z",
  "end": "2017-11-06T18:37:46.342Z"
}, {
  "id": 114,
  "title": "Long Event",
  "showMultiDayTimes": true,
  "customClass": "first-level2",     
  "desc": "desc of Long Event",
  "start": "2017-11-06T13:20:36.858Z",
  "end": "2017-11-06T15:20:36.858Z" 
}, {
  "id": 115,
  "title": "Long Event",
  "showMultiDayTimes": true,
  "customClass": "first-level4",    
  "desc": "desc of Long Event",
  "start": "2017-11-11T17:15:18.611Z",
  "end": "2017-11-11T20:15:18.611Z" 
}, {
  "id": 116,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level4",   
  "desc": "desc of PRN",
  "start": "2017-11-08T17:37:46.342Z",
  "end": "2017-11-08T18:37:46.342Z"
}, {
  "id": 117,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level4",
  "desc": "desc of PRN",
  "start": "2017-11-08T12:37:46.342Z",
  "end": "2017-11-08T13:37:46.342Z"
}, {
  "id": 118,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of PRN",
  "start": "2017-11-07T14:00:39.158Z",
  "end": "2017-11-07T15:00:39.158Z" 
}, {
  "id": 119,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of Med manag",
  "start": "2017-11-07T15:55:43.440Z",
  "end": "2017-11-07T16:55:43.440Z"
}, {
  "id": 120,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level",   
  "desc": "desc of PRN",
  "start": "2017-11-07T13:00:39.158Z",
  "end": "2017-11-07T14:00:39.158Z" 
}, {
  "id": 121,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level4",   
  "desc": "desc of PRN",
  "start": "2017-11-06T19:00:39.158Z",
  "end": "2017-11-06T20:00:39.158Z"
}, {
  "id": 122,
  "title": "PRN",
  "showMultiDayTimes": true,
  "customClass": "first-level4",   
  "desc": "desc of PRN",
  "start": "2017-11-05T19:00:39.158Z",
  "end": "2017-11-05T20:00:39.158Z"
}, {
  "id": 123,
  "title": "Med manag",
  "showMultiDayTimes": true,
  "customClass": "first-level3",   
  "desc": "desc of Med manag",
  "start": "2017-11-08T15:55:43.440Z",
  "end": "2017-11-08T16:55:43.440Z"                     
}]`,
);

events.forEach((event, index) => {
  events[index].start = new moment(event.start).toDate();
  events[index].end = new moment(event.end).toDate();
});
export default events;
