import './App.css';
import AutoComplete from './Components/AutoComplete';

const App = () => {
 
  const cityNames =[
    "Abbottabad" ,
    "AhmadpurEast" ,
    "Bahawalnagar" ,
    "Bahawalpur" ,
    "Burewala" ,
    "Chakdara" ,
    "Chakwa" ,
    "Chaman" ,
    "Chiniot" ,
    "Chishtian" ,
    "Dadu" ,
    "Daska" ,
    "Dera Ghazi Khan" ,
    "Dera Ismail Khan" ,
    "Faisalabad" ,
    "Gojra" ,
    "Gujranwala" ,
    "Gujrat" ,
    "Hafizabad" ,
    "Hyderabad" ,
    "Islamabad" ,
    "Jacobabad" ,
    "Jaranwala" ,
    "Jhang" ,
    "Jhelum" ,
    "Kamalia" ,
    "Kamoke" ,
    "Kandhkot" ,
    "Karachi" ,
    "Kasur" ,
    "Khairpur" ,
    "Khanewa" ,
    "Khanpur" ,
    "Khushab" ,
    "Khuzdar" ,
    "Kohat" ,
    "Kot Adu" ,
    "Lahore" ,
    "Larkana" ,
    "Mandi Bahauddin" ,
    "Mardan" ,
    "Mingora" ,
    "Mirpur Khas" ,
    "Multan" ,
    "Muridke" ,
    "Muzaffargarh" ,
    "Nawabshah" ,
    "Nowshera" ,
    "kara" ,
    "Pakpattan" ,
    "Peshawar" ,
    "Quetta" ,
    "Rahim Yar Khan" ,
    "Rawalpindi" ,
    "Rawalpini" ,
    "Sadiqabad" ,
    "Sahiwal" ,
    "Sargodha" ,
    "Shekhupura" ,
    "Shikarpur" ,
    "Sialkot" ,
    "Sukkur" ,
    "Swabi" ,
    "Tando Allahyar" ,
    "Taxila" ,
    "Timergara" ,
    "Toba Tek Singh" ,
    "Vehari" ,
    "Wah Cantonment" ,
    "Wazirabad",

  ];
  
  return (
    <div className="container">
     
     <AutoComplete options={cityNames} />

    </div>
  );
}

export default App;
