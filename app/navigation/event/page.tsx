"use client";
import Link from "next/link";
import Image from "next/image";
const thumbnail = [
  {
    label: " 신규가입 첫충전 이벤트 ",
    src: "banner_event",
    href: "",
  },
  {
    label: " 레벨별 콤프 이벤트 ",
    src: "banner_event2",
    href: "",
  },
  {
    label: " 카지노 & 슬롯 무한매충 이벤트 ",
    src: "banner_event3",
    href: "",
  },
  {
    label: " 남대문 말뚝박기 이벤트 ",
    src: "banner_event4",
    href: "",
  },
  {
    label: " 지인추천 이벤트 ",
    src: "banner_event5",
    href: "",
  },
  {
    label: " 출석체크 이벤트 ",
    src: "banner_event6",
    href: "",
  },
  {
    label: " 누적 충전 이벤트 ",
    src: "banner_event7",
    href: "",
  },
  {
    label: " 스포츠 한폴낙 이벤트 ",
    src: "banner_event8",
    href: "",
  },
  {
    label: " 스포츠 올미당 이벤트 ",
    src: "banner_event9",
    href: "",
  },
  {
    label: " 미니게임 연승 & 연패 이벤트 ",
    src: "banner_event10",
    href: "",
  },
  {
    label: " 미니게임 먹죽먹죽 이벤트 ",
    src: "banner_event11",
    href: "",
  },
  {
    label: " 토요일 로또 이벤트 ",
    src: "banner_event12",
    href: "",
  },
  {
    label: " 슬롯 프리스핀 이벤트 ",
    src: "banner_event13",
    href: "",
  },
  {
    label: " 슬롯 올인 이벤트 ",
    src: "banner_event14",
    href: "",
  },
  {
    label: " 복귀하라 이벤트 ",
    src: "banner_event15",
    href: "",
  },
  {
    label: " 커뮤니티 리뷰 이벤트 ",
    src: "banner_event16",
    href: "",
  },
  {
    label: " 생일 축하 이벤트 ",
    src: "banner_event17",
    href: "",
  },
  {
    label: " VIP레벨 고액 전용 ",
    src: "banner_event18",
    href: "",
  },
];
export default function Home() {
  return (
    <>
      <p className="nav-btn-primary text-4xl font-black text-center py-2">
        이벤트
      </p>{" "}
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-4 gap-2 mb-5">
        {thumbnail.map((items, i) => (
          <div key={i} className="flex flex-col bg-zinc-900/90 ">
            <Image
              src={`/event_image/${items.src}.png`}
              width={200}
              height={20}
              alt="banner"
              className="object-fill w-full h-auto"
            />
            <div className="flex flex-row justify-between items-center p-2">
              <p className="text-white text-sm truncate">{items.label}</p>
              <Link
                href={items.href}
                className="btn-gold-nav-gradient p-1 text-sm px-3 rounded-sm bg-zinc-700/50"
              >
                상세보기
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
