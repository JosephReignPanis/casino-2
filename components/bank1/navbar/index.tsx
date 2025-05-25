import Image from "next/image";
import Link from "next/link";
import { SECONDARYBUTTONS } from "@/const/routes";
import { PRIMARYBUTTONS } from "@/const/routes";
export default function Navbar() {
  const accountInfoItems = [
    "Name",
    "폭기",
    "보유금액",
    "보유포인트",
    "보유카지노",
  ];

  return (
    <>
      <div className="hidden lg:block bg-neutral-950">
        <nav className="flex flex-row  gap-4 justify-between p-2">
          <div className="flex flex-row gap-4">
            <Link href={"/"}>
              <Image
                src={"/bank_logo.png"}
                width={150}
                height={50}
                alt="logo"
              />
            </Link>
            <div className="flex flex-row items-center align-middle gap-4">
              {PRIMARYBUTTONS.map((item, index) => (
                <Link key={index} href={item.path} className="nav-btn-primary">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <button className="btn-gold-nav-gradient px-4 rounded-sm">
              회원가입
            </button>
            <button className="btn-outline-nav-gradient">로그인</button>
          </div>
        </nav>

        <nav className="flex flex-row gap-4 justify-between p-2">
          <div className="flex flex-row gap-2">
            {accountInfoItems.map((item, index) => (
              <button
                key={index}
                className="btn-gold-secondary-gradient px-2 py-1 "
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex flex-row gap-2">
            {SECONDARYBUTTONS.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="btn-gold-nav-gradient px-4 py-1 rounded-sm align-middle"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
