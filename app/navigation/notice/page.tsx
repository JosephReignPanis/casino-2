"use client";
import Image from "next/image";
import Link from "next/link";

const thumbnail = [
  {
    label: "신규가입 첫충전 이벤트",
    src: "notice_image1",
    href: "",
  },
  {
    label: "롤링 규정",
    src: "notice_image2",
    href: "",
  },
  {
    label: "레벨별 배팅한도 및 혜택 공지",
    src: "notice_image3",
    href: "",
  },
  {
    label: "  스포츠 종목별 베팅규정  ",
    src: "notice_image4",
    href: "",
  },
  {
    label: " 스포츠 인플레이 & 실시간 규정 ",
    src: "notice_image5",
    href: "",
  },
  {
    label: " 스포츠 축베팅, 보험베팅,",
    src: "notice_image6",
    href: "",
  },
  {
    label: " 미니게임 & 가상스포츠,",
    src: "notice_image7",
    href: "",
  },
  {
    label: " 베팅 취소 및 적중특례 규정 ",
    src: "notice_image8",
    href: "",
  },
  {
    label: " 카지노 이용 금지게임 안내 ",
    src: "notice_image9",
    href: "",
  },
  {
    label: " 레볼루션 홀덤 규정 ",
    src: "notice_image10",
    href: "",
  },
  {
    label: " 베팅 취소 및 적중특례 규정 ",
    src: "notice_image11",
    href: "",
  },
  {
    label: "미니게임 유출 베팅 강력제재 ",
    src: "notice_image12",
    href: "",
  },
];

export default function Home() {
  return (
    <>
      <div className="col-span-8 gap-1">
        {" "}
        <p className="nav-btn-primary text-4xl font-black text-center py-2">
          공지사항
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-4 gap-2 mb-5">
          {thumbnail.map((items, i) => (
            <div key={i} className="flex flex-col bg-zinc-900/90 ">
              <Image
                src={`/notice_image/${items.src}.png`}
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
      </div>
    </>
  );
}
