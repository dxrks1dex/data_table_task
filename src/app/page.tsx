"use client";
import "./App.scss";
import { Provider } from "react-redux";
import { store } from "@/features/store";
import { DataPage } from "@/components/DataTable/SearchBar/DataPage";

export default function Home() {
  return (
    <div className="app">
      <Provider store={store}>
        <main>
          <DataPage />
          {/*<DataTable />*/}
        </main>
      </Provider>
    </div>
  );
}
