// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "./db/Database";

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
export default function HeadGetApi(req, res) {
  db.query(
    `SELECT * FROM head WHERE Page_Name = '${req.query.page}'`,
    (err, result, fields) => {
      if (result?.length === 0) {
        res.status(500).send({ message: "No data found for this page" });
      } else {
        console.log("here is ress", result, req.query.page);
        return res.json(result);
      }
    }
  );
}
