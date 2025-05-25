"use client";

import Image from "next/image";
import { useState } from "react";

export default function MiddleContent() {
  const [activeTab2, setActiveTab2] = useState("죽구");
  const tab2 = ["죽구", "농구", "야구", "배구", "아이스하키", "아이스"];

  const notices = [
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
  ];

  const events = [
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
  ];
  interface CardListProps {
    data: { type: string; title: string; date: string }[];
    badgeColor: string;
  }

  const CardList: React.FC<CardListProps> = ({ data, badgeColor }) => (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-row justify-between py-4 px-2 border-b border-zinc-600 hover:bg-zinc-800/50"
        >
          <div className="flex flex-row gap-2">
            <div
              className={`px-2 py-1 text-xs text-center font-bold items-center flex rounded-lg ${badgeColor}`}
            >
              {item.type}
            </div>
            <p className="truncate max-w-40 text-sm overflow-hidden whitespace-nowrap">
              {item.title}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="truncate max-w-[100px] text-sm overflow-hidden whitespace-nowrap text-zinc-400">
              {item.date}
            </p>
            <Image
              src="/r-arrow.png"
              width={10}
              height={10}
              className="w-5 h-5 object-contain"
              alt="r-arrow"
            />
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <>
      <div className="block sm:hidden">
        <Image
          src="/placeholder1.png"
          width={500}
          height={300}
          alt="placeholder"
          className="w-full"
        />
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="col-span-1 flex flex-col gap-2">
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-lg items-center mt-3">
          <p>공지사항</p>
          <Image
            src="/plus_icon.png"
            width={10}
            height={10}
            className="w-5 h-5 object-contain"
            alt="plus"
          />
        </div>
        <CardList data={notices} badgeColor="bg-zinc-800 text-[#b8862f]" />{" "}
        <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-lg items-center mt-3">
          <p>이벤트</p>
          <Image
            src="/plus_icon.png"
            width={10}
            height={10}
            className="w-5 h-5 object-contain"
            alt="plus"
          />
        </div>
        <CardList data={events} badgeColor="bg-[#b8872b] text-black" />
      </div>

      <div className="col-span-2 hidden sm:block">
        {" "}
        <div className="col-span-1 w-full h-screen flex flex-col">
          {/* Tabs */}
          <div className="flex flex-row overflow-x-auto whitespace-nowrap sidebar-bg">
            {tab2.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab2(tab)}
                className={`p-2 px-6 hover:bg-zinc-700 ${
                  activeTab2 === tab
                    ? "btn-gold-bg text-shadrounded-lg text-white "
                    : ""
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="overflow-y-auto">
            <div className="flex flex-row gap-5 bg-zinc-800 py-3 px-2">
              <button className="hover:text-amber-300">전체경기</button>
              <button className="hover:text-amber-300">시간별 정렬</button>
              <button className="hover:text-amber-300">리그별 정렬</button>
            </div>

            {/* Dynamic Tab Content */}
            <div className="flex flex-col gap-2">
              {activeTab2 === "죽구" && (
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-3 p-2 bg-zinc-800 align-middle items-center my-1">
                    <div className="flex flex-row gap-2 border-r-2 border-zinc-800">
                      <img
                        src="/icon_sidebar_bnw/1_icon.png"
                        className="h-5 w-5"
                        alt="icon"
                      />
                      <img src="/sk_icon.png" className="h-5 w-5" alt="icon" />
                      <p>호주</p>
                    </div>
                    <p>LoL 챌린저스 코리아 서머</p>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between bg-zinc-800/60">
                      <div className="flex flex-row gap-2 align-middle items-center text-sm">
                        <p className="pl-2">00/00 00:00</p>
                        <p>승무패</p>
                      </div>
                      <p className="bg-zinc-800 text-yellow-300 p-2 text-sm">
                        + 700
                      </p>
                    </div>
                    <div className="flex flex-row gap-1 text-sm">
                      <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                        <p>쿠마르 스포르팅 FC</p>
                        <p>1,41</p>
                      </div>
                      <p className="bg-zinc-800 p-2 text-sm align-middle items-center">
                        4.41
                      </p>
                      <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                        <p>Sikkim Boys</p>
                        <p>5.70</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab2 === "농구" && (
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-3 p-2 bg-zinc-800 align-middle items-center my-1">
                    <div className="flex flex-row gap-2 border-r-2 border-zinc-800">
                      <img
                        src="/icon_sidebar_bnw/1_icon.png"
                        className="h-5 w-5"
                        alt="icon"
                      />
                      <img src="/sk_icon.png" className="h-5 w-5" alt="icon" />
                      <p>호주</p>
                    </div>
                    <p> 코리아 서머</p>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between bg-zinc-800/60">
                      <div className="flex flex-row gap-2 align-middle items-center text-sm">
                        <p className="pl-2">00/00 00:00</p>
                        <p>승무패</p>
                      </div>
                      <p className="bg-zinc-800 text-yellow-300 p-2 text-sm">
                        + 700
                      </p>
                    </div>
                    <div className="flex flex-row gap-1 text-sm">
                      <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                        <p>쿠마르 스포르팅 FC</p>
                        <p>1,41</p>
                      </div>
                      <p className="bg-zinc-800 p-2 text-sm align-middle items-center">
                        4.41
                      </p>
                      <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                        <p>Sikkim Boys</p>
                        <p>5.70</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab2 === "야구" && (
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-3 p-2 bg-zinc-800 align-middle items-center my-1">
                    <div className="flex flex-row gap-2 border-r-2 border-zinc-800">
                      <img
                        src="/icon_sidebar_bnw/1_icon.png"
                        className="h-5 w-5"
                        alt="icon"
                      />
                      <img src="/sk_icon.png" className="h-5 w-5" alt="icon" />
                      <p>호주</p>
                    </div>
                    <p> 코리아 </p>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between bg-zinc-800/60">
                      <div className="flex flex-row gap-2 align-middle items-center text-sm">
                        <p className="pl-2">00/00 00:00</p>
                        <p>승무패</p>
                      </div>
                      <p className="bg-zinc-800 text-yellow-300 p-2 text-sm">
                        + 700
                      </p>
                    </div>
                    <div className="flex flex-row gap-1 text-sm">
                      <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                        <p>쿠마르 스포르팅 FC</p>
                        <p>1,41</p>
                      </div>
                      <p className="bg-zinc-800 p-2 text-sm align-middle items-center">
                        4.41
                      </p>
                      <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                        <p>Sikkim Boys</p>
                        <p>5.70</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab2 === "배구" && (
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-3 p-2 bg-zinc-800 align-middle items-center my-1">
                    <div className="flex flex-row gap-2 border-r-2 border-zinc-800">
                      <img
                        src="/icon_sidebar_bnw/1_icon.png"
                        className="h-5 w-5"
                        alt="icon"
                      />
                      <img src="/sk_icon.png" className="h-5 w-5" alt="icon" />
                      <p>호주</p>
                    </div>
                    <p> 코</p>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between bg-zinc-800/60">
                      <div className="flex flex-row gap-2 align-middle items-center text-sm">
                        <p className="pl-2">00/00 00:00</p>
                        <p>승무패</p>
                      </div>
                      <p className="bg-zinc-800 text-yellow-300 p-2 text-sm">
                        + 700
                      </p>
                    </div>
                    <div className="flex flex-row gap-1 text-sm">
                      <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                        <p>쿠마르 스포르팅 FC</p>
                        <p>1,41</p>
                      </div>
                      <p className="bg-zinc-800 p-2 text-sm align-middle items-center">
                        4.41
                      </p>
                      <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                        <p>Sikkim Boys</p>
                        <p>5.70</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab2 === "아이스하키" && (
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-3 p-2 bg-zinc-800 align-middle items-center my-1">
                    <div className="flex flex-row gap-2 border-r-2 border-zinc-800">
                      <img
                        src="/icon_sidebar_bnw/1_icon.png"
                        className="h-5 w-5"
                        alt="icon"
                      />
                      <img src="/sk_icon.png" className="h-5 w-5" alt="icon" />
                      <p>호주</p>
                    </div>
                    <p> 코리아 서머</p>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between bg-zinc-800/60">
                      <div className="flex flex-row gap-2 align-middle items-center text-sm">
                        <p className="pl-2">00/00 00:00</p>
                        <p>승무패</p>
                      </div>
                      <p className="bg-zinc-800 text-yellow-300 p-2 text-sm">
                        + 700
                      </p>
                    </div>
                    <div className="flex flex-row gap-1 text-sm">
                      <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                        <p>쿠마르 스포르팅 FC</p>
                        <p>1,41</p>
                      </div>
                      <p className="bg-zinc-800 p-2 text-sm align-middle items-center">
                        4.41
                      </p>
                      <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                        <p>Sikkim Boys</p>
                        <p>5.70</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab2 === "아이스" && (
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-3 p-2 bg-zinc-800 align-middle items-center my-1">
                    <div className="flex flex-row gap-2 border-r-2 border-zinc-800">
                      <img
                        src="/icon_sidebar_bnw/1_icon.png"
                        className="h-5 w-5"
                        alt="icon"
                      />
                      <img src="/sk_icon.png" className="h-5 w-5" alt="icon" />
                      <p>호주</p>
                    </div>
                    <p> 코리아 서머</p>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between bg-zinc-800/60">
                      <div className="flex flex-row gap-2 align-middle items-center text-sm">
                        <p className="pl-2">00/00 00:00</p>
                        <p>승무패</p>
                      </div>
                      <p className="bg-zinc-800 text-yellow-300 p-2 text-sm">
                        + 700
                      </p>
                    </div>
                    <div className="flex flex-row gap-1 text-sm">
                      <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                        <p>쿠마르 스포르팅 FC</p>
                        <p>1,41</p>
                      </div>
                      <p className="bg-zinc-800 p-2 text-sm align-middle items-center">
                        4.41
                      </p>
                      <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                        <p>Sikkim Boys</p>
                        <p>5.70</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-1">
          <div className="flex flex-row bg-[#222222] p-2 gap-2">
            <Image
              src={"/icon_sidebar_bnw/1_icon.png"}
              width={10}
              height={10}
              className="h-5 w-5"
              alt="icon"
            />
            <p>호주</p> /
            <Image
              src={"/sk_icon.png"}
              width={10}
              height={10}
              className="h-5 w-5"
              alt="icon"
            />
            <p>NWSL CCUP</p>
          </div>
          <div className="flex flex-row bg-[#222222]  p-2 text-sm gap-2">
            <p className="text-zinc-500">00/00 </p>
            <p className="text-zinc-500">00:00</p>
            <p>포들랜드 손스 FC</p>
            <p>vs</p>
            <p>San Diego Wave Women's</p>
          </div>
          <div className=" w-full h-50 bg-zinc-700">teteteete</div>

          <div>
            <div className="flex flex-row p-2 gap-5 bg-[#222222] ">
              <p className="hover:text-amber-300 hover:font-bold">전체</p>
              <p className="hover:text-amber-300 hover:font-bold">메인</p>
              <p className="hover:text-amber-300 hover:font-bold">점수</p>
              <p className="hover:text-amber-300 hover:font-bold">전반전</p>
              <p className="hover:text-amber-300 hover:font-bold">후반전</p>
              <p className="hover:text-amber-300 hover:font-bold">코너</p>
              <p className="hover:text-amber-300 hover:font-bold">카드</p>
              <p className="hover:text-amber-300 hover:font-bold">스페셜</p>
            </div>
            <p className="flex flex-row bg-[#222222] p-2 mt-1">승무패</p>
            <div className="flex flex-row gap-1 pt-1 text-sm">
              <div className="flex-1 bg-zinc-700 flex flex-row justify-between p-2">
                <p>홈승+오버(2.5)</p>
                <p className="text-yellow-400">2</p>
              </div>{" "}
              <div className="flex-1 bg-zinc-700 flex flex-row justify-between p-2">
                <p>홈승+오버(2.5)</p>
                <p className="text-yellow-400">2</p>
              </div>{" "}
              <div className="flex-1 bg-zinc-700 flex flex-row justify-between p-2">
                <p>홈승+오버(2.5)</p>
                <p className="text-yellow-400">2</p>
              </div>{" "}
            </div>{" "}
            <p className="flex flex-row bg-[#222222] p-2 mt-1">승무패</p>
            <div className="flex flex-row gap-1 pt-1 text-sm">
              <div className="flex-1 bg-zinc-700 flex flex-row justify-between p-2">
                <p>홈승+오버(2.5)</p>
                <p className="text-yellow-400">2</p>
              </div>{" "}
              <div className="flex-1 bg-zinc-700 flex flex-row justify-between p-2">
                <p>홈승+오버(2.5)</p>
                <p className="text-yellow-400">2</p>
              </div>{" "}
              <div className="flex-1 bg-zinc-700 flex flex-row justify-between p-2">
                <p>홈승+오버(2.5)</p>
                <p className="text-yellow-400">2</p>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
