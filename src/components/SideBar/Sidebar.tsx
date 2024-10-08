"use client";
import styles from "./Sidebar.module.scss";
import profPic from "@/pictures/profPic.png";
import Image from "next/image";
import { SettingsIcon } from "@/components/icons/SettingsIcon";
import { CSSProperties } from "react";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { DataTableIcon } from "@/components/icons/DataTableIcon";
import { ProductIcon } from "@/components/icons/ProductIcon";
import { AnalyticIcon } from "@/components/icons/AnalyticIcon";
import { CalendarIcon } from "@/components/icons/CalendarIcon";
import { MessageIcon } from "@/components/icons/MessageIcon";
import { CryptoIcon } from "@/components/icons/CryptoIcon";
import { SupportIcon } from "@/components/icons/SupportIcon";
import { SignOutIcon } from "@/components/icons/SignOutIcon";
import { useRouter } from "next/navigation";

interface CustomStyle extends CSSProperties {
  "--section-bg-color"?: string;
}

export const Sidebar = () => {
  const router = useRouter();
  const isSectionActive = (isActive: boolean) => {
    if (isActive) {
      return "#FFFFFF";
    } else {
      return null;
    }
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <Image src={profPic} alt="" />
        <div>
          <p>Welcome back,</p>
          <h2>Drax</h2>
        </div>
        <div className={styles.settings}>
          <SettingsIcon />
        </div>
      </div>
      <nav>
        <ul>
          <li
            style={
              {
                "--section-bg-color": isSectionActive(false),
              } as CustomStyle
            }
            onClick={() => router.push("search")}
          >
            <SearchIcon className={"searchIcon"} />
            <p>Search</p>
            <MenuIcon />
          </li>
          <li
            style={
              {
                "--section-bg-color": isSectionActive(true),
              } as CustomStyle
            }
            onClick={() => router.push("/")}
          >
            <DataTableIcon />
            <p>Data Table</p>
            <MenuIcon />
          </li>
          <li
            style={
              {
                "--section-bg-color": isSectionActive(false),
              } as CustomStyle
            }
            onClick={() => router.push("product")}
          >
            <ProductIcon />
            <p>Product</p>
            <MenuIcon />
          </li>
          <li
            style={
              {
                "--section-bg-color": isSectionActive(false),
              } as CustomStyle
            }
            onClick={() => router.push("analytic")}
          >
            <AnalyticIcon />
            <p>Analytics</p>
            <MenuIcon />
          </li>
          <li
            style={
              {
                "--section-bg-color": isSectionActive(false),
              } as CustomStyle
            }
            onClick={() => router.push("calendar")}
          >
            <CalendarIcon />
            <p>Calendar</p>
            <MenuIcon />
          </li>
          <li
            style={
              {
                "--section-bg-color": isSectionActive(false),
              } as CustomStyle
            }
            onClick={() => router.push("messenger")}
          >
            <MessageIcon />
            <p>Messenger</p>
            <MenuIcon />
          </li>
          <li
            style={
              {
                "--section-bg-color": isSectionActive(false),
              } as CustomStyle
            }
            onClick={() => router.push("crypto")}
          >
            <CryptoIcon />
            <p>Crypto</p>
            <MenuIcon />
          </li>
        </ul>
      </nav>
      <div className={styles.support}>
        <div>
          <SupportIcon />
          <p>Support</p>
        </div>
        <div>
          <SignOutIcon />
          <p>Sign Out</p>
        </div>
      </div>
    </aside>
  );
};
