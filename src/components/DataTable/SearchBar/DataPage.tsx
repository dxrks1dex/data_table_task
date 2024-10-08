import React, { useState } from "react";
import styles from "./DataPage.module.scss";
import { DataTable } from "@/components/DataTable/DataTable";
import { SearchBar } from "@/components/DataTable/SearchBar/SearchBar";
import { AddUserForm } from "@/components/DataTable/UserOperation/AddUserForm";
import { BudgetCards } from "@/components/DataTable/BudgetCards/BudgetCards";

export const DataPage = () => {
  const [showForm, setShowForm] = useState(false);

  const onShowForm = () => {
    setShowForm(true);
  };

  return (
    <div className={styles.dataPage}>
      <SearchBar onShowForm={onShowForm} />
      {showForm && <AddUserForm setShowForm={setShowForm} />}
      <BudgetCards />
      <DataTable />
    </div>
  );
};
