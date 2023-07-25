'use client';
import { Checkbox } from "@nextui-org/react"
export default function Library() {
    return (
        <Checkbox.Group
        label="Select categories"
        orientation="horizontal"
        color="secondary"
        defaultValue={["uncategorized"]}
      >
        <Checkbox value="all">All</Checkbox>
        <Checkbox value="uncategorized">Uncategorized</Checkbox>
        
      </Checkbox.Group>
    )
}