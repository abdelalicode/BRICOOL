import React from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SENDTRANSACTION } from "../../router";




export default function AddTransaction() {


    return (
        <div class="mt-48 m-12 border-dashed border-2 border-indigo-700 p-4">
            <div className="flex gap-16">
                <h1>NEW TRANSACTIONS?</h1>
     
                        <Button variant="outline" className="font-bold">
                           <Link to={"/sentransaction"}>+</Link>
                        </Button>

            </div>
        </div>
    );
}
