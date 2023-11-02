"use client";

import { UsersContext } from "@/contexts/Users/users.context";
import { useContext } from "react";

export const useUsers = () => useContext(UsersContext);
