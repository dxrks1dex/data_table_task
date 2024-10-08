import styles from "./BudgetCards.module.scss";
import { CSSProperties } from "react";
import { filterUsers } from "@/features/sortedUsers";
import { useSelector } from "react-redux";
import { ArrowDownIcon, ArrowUpIcon } from "@/components/icons/ArrowsIcon";
import { RootState } from "@/features/store";

interface CustomStyle extends CSSProperties {
  "--card-bg-color"?: string;
  "--card-text-color"?: string;
  "--card-earnings-color"?: string;
}

export const BudgetCards = () => {
  const { users, searchQuery } = useSelector((state: RootState) => state.users);

  return (
    <section>
      <div className={styles.searchResult}>
        <h3>
          {searchQuery.slice(0, 1).toUpperCase()}
          {searchQuery.slice(1, searchQuery.length).toLowerCase()}
        </h3>
        <p>{filterUsers({ users, searchQuery }).length} results found</p>
      </div>

      <div className={styles.cards}>
        {[
          "Total Budget",
          "Monthly Budget",
          "Weekly Budget",
          "Today's Budget",
        ].map((budget, index) => (
          <div
            key={index}
            className={styles.card}
            style={
              {
                "--card-bg-color": index === 1 ? "#5B6AD0" : "#f4f4f4",
                "--card-text-color": index === 1 ? "#FFFFFF" : "#777",
                "--card-earnings-color": index === 1 ? "#FFFFFF" : "#404D61",
              } as CustomStyle
            }
            // onClick={() => onCardClick(index)}
          >
            <div>
              <p>{budget}</p>
              {index === 1 || index === 0 ? (
                <ArrowDownIcon
                  width={"18"}
                  fill={index === 1 ? `#FFFFFF` : "#F63F3F"}
                  height={"18px"}
                />
              ) : (
                <ArrowUpIcon width={"18px"} fill={"#44C5E2"} height={"18px"} />
              )}
            </div>
            <h3>$85,125.00</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
