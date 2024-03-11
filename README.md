# sourceId-library

1. Install dependency on your project
   $ npm install ktdevtest1

2. Import library

For node js
const { sourceIdApi } = require("ktdevtest1");

For react
import { sourceIdApi } from "ktdevtest1";

3. Use api code

const data = await sourceIdApi.getAdminUser(
"bcdffde2-9427-4e8f-a84b-beb62cfea9f1",
'65ca159425c0a322b29b8d7e'
);
