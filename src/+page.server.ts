import {db} from "$lib/database";
import {grado, grupo} from "$lib/database/schema"
import {eq, and, like} from "drizzle-orm"
import { fail } from "@sveltejs/kit";