import "./App.css";
import NewsWidget from "./components/NewsWidget";
import OwnAdwiseringWidget from "./components/OwnAdwiseringWidget";
import SearchWidget from "./components/SearchWidget";
import SomeoneAdwiseringWidget from "./components/SomeoneAdwiseringWidget";
import Service from "./components/Service"

function App() {

  const news = {
    date: new Date,
    newsList: [
      {
        icon: "data_thresholding",
        text: "Заблудившийся в тайге россиянин три дня бродил по чаще и нашёл спиртзавод",
        link: "https://lenta.ru/news/2024/07/23/zabludivshiysya-v-tayge-rossiyanin-tri-dnya-brodil-bosikom-po-lesnoy-chasche-i-nashel-spirtzavod/",
      },
      {
        icon: "browse_activity",
        text: "В Карелии 26-летний молодой человек проснулся без денег на даче",
        link: "https://gubdaily.ru/news/v-karelii-26-letnij-molodoj-chelovek-prosnulsya-bez-deneg-na-dache/",
      },
      {
        icon: "assistant_direction",
        text: "«Они как люди»: два сурка дрались, а третий - разнимал",
        link: "https://www.ohotniki.ru/hunting/news/2024/07/12/671147-oni-kak-lyudi-dva-surka-dralis-a-tretiy-raznimal-.html",
      },
      {
        icon: "clock_loader_60",
        text: "По Сызрани бегает весёлая собака с трусами в зубах",
        link: "https://ktv-ray.ru/novost/po_syzrani_begaet_veselaya_sobaka_s_trusami_v_zubah/123583/",
      },
      {
        icon: "captive_portal",
        text: "Питона-альбиноса в Калиниградском зоопарке измерили в попугаях",
        link: "https://kaskad.tv/novosti/51977-21-popugaj-v-dlinu-v-kaliningradskom-zooparke-pokazali-tigrovogo-pitona-albinosa-zoyu",
      },
    ],
    rateList: [
      {
        currency: "USD MOEX",
        rate: "86,50",
        change: "+0,58",
      },
      {
        currency: "EUR MOEX",
        rate: "93,52",
        change: "+0,27",
      },
      {
        currency: "НЕФТЬ",
        rate: "79,99",
        change: "-0,41%",
      },
    ]
  }

  const ownAdwiserinData = {
    image: "../src/assets/img/ownAdwisering.jfif",
    title: "Купи подписку на Яндекс.музыка!",
    text : "У нас закончилась лицензия на все твои любимые треки",
  }

  const search = {
    menu: ["Погода", "Картинки", "Новости", "Карты", "Маркет", "Переводчик", "Эфир", "Почта", "Музыка"],
    example: "погода в Урюпинске 21 января 1976 года"
  }

  const someoneAdwiserinData = {
    image: "../src/assets/img/",
    text: "Здесь должна быть ваша реклама, я не нашёл картинку"
  }

  const serviceData = [
    {
      title: "Погода",
      component: "Weather",
      data: {
        icon: "sunny",
        current: "+25",
        night: "+14",
        day: "+27"
      }
    },
    {
      title: "Посещаемое",
      component: "Visited",
      data: [
        {
          title: "Недвиимость",
          text: "Потянешь ипотеку?"
        },
        {
          title: "Маркет",
          text: "Побалуй себя пельменями"
        },
        {
          title: "Авто.ру",
          text: "Б/У Kia или новый Cherry?"
        }
      ]
    },
    {
      title: "Карта Монголии",
      component: "Map",
      data: {
        text: "Расписание табунов"
      }
    },
    {
      title: "Телепрограмма",
      component: "TVProgramm",
      data: [
        {
          time: "20:15",
          name: "Спокойной ночи, малыши",
          channel: "Россия 1"
        },
        {
          time: "20:00",
          name: "Чрезвычайное проишествие",
          channel: "НТВ"
        },
        {
          time: "19:45",
          name: "Голые и смешные",
          channel: "РЕН ТВ"
        }
      ]
    },
    {
      title: "Эфир",
      component: "Broadcast",
      data: [
        {
          name: "Новости Пыжмы",
          channel: "Pizchma Today"
        },
        {
          name: "Выжить на Кэшбек",
          channel: "Лайфхаки"
        },
        {
          name: "Дэдпул и Росомаха",
          channel: "Пиратский кинозал"
        }
      ]
    }
  ]

  return (
    <>
      <div className="header-container">
        <NewsWidget news={news}/>
        <OwnAdwiseringWidget data={ownAdwiserinData}/>
      </div>
      <SearchWidget search={search} />
      <SomeoneAdwiseringWidget data={someoneAdwiserinData} />
      <div className="services-container">
        {serviceData.map((item, i) => (
          <Service key={i} data={item} />
        ))}
      </div>
    </>
  )
}

export default App
