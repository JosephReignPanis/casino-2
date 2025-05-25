"use client";

import { useState } from "react";

export default function Home() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const data = [
    {
      status: "읽음",
      title: " 인플레이 정상화 안내",
      date: " 05/04 ",
      message: `
      
        다가오는 야구 시즌 관련 경기 마감 규정 안내차 쪽지 보내드립니다...
        
       messsage here

        many enter  many enter  many enter  many enter  many enter 

        many enter
        `,
      link: "평생남대문.com",
    },
    {
      status: "읽음",
      title: "NCvsKIA 홈원정 오류",
      date: "02/06",
      message: "이번 주 축구 경기 일정이 변경되었습니다.",
      link: "sportsupdate.com",
    },
  ];

  return (
    <>
      <div className="col-span-8 gap-1">
        <p className="nav-btn-primary text-4xl font-black text-center py-2">
          쪽지함
        </p>

        {/* Table Wrapper with horizontal scroll */}
        <div className="w-full overflow-x-auto">
          <table className="min-w- w-full bg-neutral-900 table-fixed">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-yellow-300 text-center p-2">일시</th>
                <th className="text-yellow-300 text-center p-2">제목</th>
                <th className="text-yellow-300 text-center p-2">작성일</th>
                <th className="text-yellow-300 text-center p-2">삭제</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <>
                  <tr
                    key={index}
                    className="text-white border-b border-neutral-800 hover:bg-neutral-800 cursor-pointer text-center"
                    onClick={() => toggleRow(index)}
                  >
                    <td className="py-2">
                      <span className="inline-block p-2 bg-zinc-700 rounded-full text-sm">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-2 text-sm">{item.title}</td>
                    <td className="py-2 text-sm">{item.date}</td>
                    <td className="py-2 text-sm">
                      <i className="fa-solid fa-xmark" />
                    </td>
                  </tr>

                  {expandedRow === index && (
                    <tr>
                      <td
                        colSpan={4}
                        className="bg-zinc-950 text-white text-center p-4"
                      >
                        <p className="pb-2">안녕하세요 남대문 운영진입니다.</p>
                        <p className="pb-2">
                          ----------------------------------------------
                        </p>
                        <p className="whitespace-pre-line pb-2">
                          {item.message}
                        </p>
                        <p className="text-yellow-400">
                          평생 주소 : {item.link}
                        </p>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="flex flex-row w-full justify-center mt-4 gap-2 flex-wrap">
          <button className="border border-yellow-400 text-yellow-400 px-8 py-2 hover:text-black hover:bg-yellow-400">
            입금신청하기
          </button>
          <button className="bg-zinc-800 text-white px-8 py-2 hover:bg-zinc-700">
            입금신청하기
          </button>
        </div>
      </div>
    </>
  );
}
