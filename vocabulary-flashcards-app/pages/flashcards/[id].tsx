import { google, sheets_v4 } from 'googleapis';

type QueryType = {
  query: {
    id: number;
  };
}

export async function getServerSideProps({ query }: QueryType) {
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
  });

  const sheets = google.sheets({
    version: 'v4',
    auth
  });

  const { id } = query;

  const range = `VocabularyFlashcardsWordList!A${id}:C${id}`;

  const getSheetID = async () => {
    let envSheetID = process.env.SHEET_ID;
    const returnValue = envSheetID ? envSheetID : "invalid_sheet_id";
    return returnValue;
  }

  const sheetID: string = await getSheetID();

  const responsePayload: sheets_v4.Params$Resource$Spreadsheets$Values$Get = {
    spreadsheetId: sheetID,
    range,
  }

  try {
    const response = await sheets.spreadsheets.values.get(responsePayload);
    const res: unknown = response.data.values![0] as Array<string>;
    return {
      props: {
        res
      }
    }
  } catch (e) {
    console.error(e);
    const errorProps = JSON.stringify(e);
    return {
      props: {
        errorProps
      }
    }
  }
}

export default function FlashCard({ res }: any) {
  return <article>
    <h1>{res[0]}</h1>
    <h1>{res[1]}</h1>
    <h1>{res[2]}</h1>
  </article>
}