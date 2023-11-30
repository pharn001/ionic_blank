Ionic Framework ເປັນເຄື່ອງມືສ້າງ UI(User Interface) ຂອງໂທລະສັບມືຖື ແບບຟຣີ ສຳລັບນັກພັດທະນາແອັບພຣິເຄເຊິນ ຄຸນນະພາບສູງ ຂ້າມພລັດຟອມເຊົັ້ນ :​ ios,Android  ແລະ ເວັບໂດຍ ໃຊ້ໂຄ້ດດຽວກັນ
ຂັ້ນຕອນການຕິດຕັ້ງເພື່ອພັດທະນາແອັບ
0 ທຸກຄັ້ງຕ້ອງເຊື່ອມໂຍງອິນເຕີເນັດກ່ອນ
1. ດາວໂຫຼດ ແລະ ຕິດຕັ້ງ Nodejs ໃຫ້ຕິດຕັ້ງລົງ drive D
https://nodejs.org/erg/en/download
- ກວດສອບເບິ່ງເວີເຊັິນເພື່ອໃຫ້ແນ່ໃຈວ່າການຕິດຕັ້ງ ສຳເລັດແລ້ວ ຫຼື ບໍ່  ໂດຍການຂຽນ commade prompt: ຂຽນ node -v enter
ຖ້າເຫັນເວີເຊິນມາສະແດງ ຖືວ່າຕິດຕັ້ງ Nodejs ແລ້ວ...
2. ຕິດຕັ້ງ Ionic ແບບ glodal
2.1 ເຂົ້າຫາ command prompt ຂຶ້ນມາແລ້ວຂຽນຄຳສັ່ງ
 npm install -g ionic
ຈາກນັ້ນ ໃຫ້ລໍຖ້າຈົນກວ່າການດາວໂຫຼດ ແລະ ຕິດຕັ້ງ ຈະສຳເລັດ
ຈາກນັ້ນ ໃຫ້ລໍຖ້າຈົນກວ່າການດາວໂຫຼດ ແລະ ຕິດຕັ້ງສຳເລັດ..
- ກວດສອບເບິ່ງເວີເຊິນເພື່ອໃຫ້ແນ່ໃຈວ່າການຕິດຕັ້ງ ສຳເລັດແລວຫຼື ບໍ່ໂດຍການຂຽນ ionic -v 
ຖ້າາເຫັນເວີເຊິນມາສະແດງ ຖທວ່າການຕິດຕັ້ງ Ionci ສຳເລັດແລ້ວ
-​ເບິ່ງລາຍລະອຽດກ່ຽວກັບ ຄຳນສັ່ງ ionic ຂຽນ 
ionic -help 
3. ການສ້າງໂປຣເຈັກໃໝ່ (create new project app)
command Prompt
- ໃຫ້ເຂົ້າຫາ D:/ 
ຮູບແບບ ໜ້າຕາແອັບ  (template)
ionic start ຊືແອັບ ຮູບແບບຂອງໜ້າແອັບ
	- blank
	- tabs
	- sidemenu
ຕົວຢ່າງ:
	ionic start myApp tabs ກົດ enter 
ຈາກນັ້ນ ໃຫລໍຖ້າຈົນກວ່າຈະສຳເລັດ...
ໃຫ້ເລືອກ Angular ໂດຍນຳໃຊ້ຄີບັອດເລື່ອຂຶນລົງ ແລ້ວກົດ enter
4. ການຣັນໂປຣເຈັກ (Run Project app)
 - ເຂົ້າຫາ command Prompt 
 - ເຂົ້າຫາໂຟເດີ ໂປຣເຈັກ ຕົວຢ່າງ: D:\myApp\ 
- ionic serve
## II ການພັດທະນາແອັບ (Ionic App)
 2.1 ການສະແດງຂໍ້ຄວາມ (ion-text)
 ຈົ່ງສ້າງໂປຣເຈັກໃໝ່ຂຶ້ນມາກຳນົດໜ້າແອັບ ເປັນຮູບແບບ ໜ້າວ່າງເປົ່າ Blank
  ຕົວຢ່າງ: ຈົ່ງສະແດງຄຳວ່າ welcome to Ionic
  <div id="contianer">
	<ion-text color="success">
		<h1>	Welcome to Ionic </hi>
	</ion-text>
  </div> 
  2.2 ການສ້າງໜ້າໃໝ່ (New page)
 cmd ເຂົ້າຫາໂຟເດີ ໂປປຣເຈັກ ແລ້ວຂຽນ
ionic generate page ຊື່ page  ແລ້ວກົດ enter
ໃນຕົວຢ່າງນີ້ໃຫ້ກຳນົດຊື່ page ແລ້ວ alert 
ແລ້ວໃຫ້ສ້າງປຸ່ມ alert
2.3 ຄຳສັ່ງເຊືອ່ມໂຍງ ຫາ ໜ້າອື່ນ (next Page)
ຕົວຢ່າງ: ຈົ່ງສ້າງປຸ່ມຂຶ້ນມາໃໝ່ກົດຊື່ເປັນ Go to Alert ໃຫ້ສ້າງຢູ່ໜ້າ home ເວລາກົດໃສ່ປຸ່ມດັ່ງກ່າວໃຫຫ້ໄປເປີດໜ້າ Alert ຂຶນມາ
 <ion-button color="danger">
      Click me
    </ion-button>
    ຮູບແບບທີ ໜຶ່ງ 
        <ion-button color="danger" href="/home">      Click me    </ion-button>
        ວິທີ2 
        <ion-button color="danger" routerLink="/home">      Click me    </ion-button>
## 2.4 ປຸ່ມກັບຄືນ (Back button)
ເຂົາຫາຟາຍທີ່ຕ້ອງການສ້າງປຸ່ມກັບຄຶນ ຟາຍທີ 2,3,4,5 
ຢູ່ສ່ວນຫົວ ຢູ່ລຸ່ມແຖວ <ion-toolbar> ໃຫ້ຂຽນ:

  <ion-buttons slot="start">
      <ion-button defaultHref="/">  </ion-button>
    </ion-buttons>
## 2.5  ສ້າງປຸ່ມ alert
ຢູ່ html
    <ion-button id="present-alert">click alert</ion-button>
   <ion-alert
    trigger="present-alert"
    header="a short Title Is best"
    subHeader="A sub header Is optional"
    message="a message  should be a shourt, complete sentence."
    [buttons]="alertButton"
    
   ></ion-alert>

 ຢູ່ ts 
    alertButton=['cancel'];
## 2.6 ກນາສະແດງຂໍ້ຄວາມ Toast
ເຂົ້າຫາຟາຍ toast.page.html
