import { client } from '@ont-dev/ontology-dapi';
import * as React from 'react';
import { Field, Form } from 'react-final-form';
import { RouterProps } from 'react-router';

export const Identity: React.SFC<RouterProps> = (props) => {
  async function onAddClaim(values: any) {
    const ontid: string = await client.api.identity.getIdentity();
    const tag: string = values.tag;
    const body: string = values.body;
    const bodyEncrypted: boolean = values.bodyEncrypted;
    const claim = { ontid, tags: [tag], body, bodyEncrypted };

    try {
      const result = await client.api.claim.addClaim({ claim: claim });
      alert('onAddClaim finished');
    } catch (e) {
      alert('onAddClaim canceled');
      // tslint:disable-next-line:no-console
      console.log('onAddClaim error:', e);
    }
  }

  async function onGetClaims() {
    const claims  = await client.api.claim.getClaims();
    console.log(claims);
  }

  function onBack() {
    props.history.goBack();
  }

  return (
    <div>
      <h2>Add Claim</h2>
      <Form
        initialValues={{
          tag: 'test',
          body: 'eyJraWQiOiJkaWQ6b250OkFQYzhGQmRHWWR6RHRXckZwOHEyQlNVRlgySEFuQnVCbmEja2V5cy0xIiwidHlwIjoiSldULVgiLCJhbGciOiJPTlQtRVMyNTYifQ==.eyJjbG0tcmV2Ijp7InR5cCI6IkF0dGVzdENvbnRyYWN0IiwiYWRkciI6IjM2YmI1YzA1M2I2YjgzOWM4ZjZiOTIzZmU4NTJmOTEyMzliOWZjY2MifSwic3ViIjoiZGlkOm9udDpBS0c5TlRIZGV0Ynh0cUR4Wm11azRTYlNoekFYb3p1Nmo3IiwidmVyIjoidjEuMCIsImNsbSI6eyJOYXRpb25hbGl0eSI6IkJFIiwiTmFtZSI6IkhTVUFOWUFORyIsIkJpcnRoRGF5IjoiMTk5NC0wMy0wOSIsIkV4cGlyYXRpb25EYXRlIjoiMjAyMi0wMy0xMiIsIklERG9jTnVtYmVyIjoiRU0yNjAzODYiLCJJc3N1ZXJOYW1lIjoiU2h1ZnRpcHJvIn0sImlzcyI6ImRpZDpvbnQ6QVBjOEZCZEdZZHpEdFdyRnA4cTJCU1VGWDJIQW5CdUJuYSIsImV4cCI6MTYyODg1NTU0NSwiaWF0IjoxNTk3MzE5NTQ2LCJAY29udGV4dCI6ImNyZWRlbnRpYWw6c2ZwX3Bhc3Nwb3J0X2F1dGhlbnRpY2F0aW9uIiwianRpIjoiYjdhMDAyNDZmOTk1MDhmZWNlNTMxNDM4ZjEwZjU1YWU2MGM4M2VmMTFkMjQwZjg3M2RjNDNjMmVjMjk0OGExNCJ9.Ads7y0bkRN4yl7ei8RvVJDW2hA6oPbGyRRfU+7N6GW9TMb6QLicz0wDONmyCUsBK9kMkaQQIsMfBXXdJ8EulVmk=\.eyJUeXBlIjoiTWVya2xlUHJvb2YiLCJNZXJrbGVSb290IjoiODQzNWJjMzkzZDRiOTU0OGQwMmExNGQ3NzBiNTMyYjI1YzNhYzAwYTMwOWUwNzU4ODMyMTc4M2Q2MmRmYmIzZiIsIlR4bkhhc2giOiI3N2I1YWZjMzBjYmZlYmU2OWU4MGQxZjZmNjQwYTZjM2ZkNGRjODNiNTY0YmJiZmRhYTY4MTA4Y2FmYWQ5YmQ3IiwiQmxvY2tIZWlnaHQiOjEzMzgyNjk1LCJOb2RlcyI6W3siVGFyZ2V0SGFzaCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAiLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiNzdjNWRiZmJjYTI3Y2NkZWNlNzY1ZWMwNTgzNmM1NjFhNTcxZjAxOGJmZGVlZDc4YjdkMmFlZWNkMDk4MDdhZSIsIkRpcmVjdGlvbiI6IkxlZnQifSx7IlRhcmdldEhhc2giOiJlMTQxNzJjOGE2ZTE5Mzk0MzQ2NTY0OGUxYzU4NmE5MTg2YTM3ODRlZTdlZTI5ZGI5ZWRiZjZhZmUwNGY1MzkwIiwiRGlyZWN0aW9uIjoiTGVmdCJ9LHsiVGFyZ2V0SGFzaCI6IjY1MzZlZTViY2IzYzQwMjM2ZGY3NTE0MmU4MDI5ODQxODAwN2Q4YzIxNGIwOGYyYWM3YjVlNmYwMWE3MWJhMTkiLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiOGY4NTRjMTRhYjQyMmVmOWRlZmJhZWJmNTViOGJmOTNkM2VlMDYxMGYwNjExMTVjYjg1OTk0MzhlMjQ4NWMwNyIsIkRpcmVjdGlvbiI6IkxlZnQifSx7IlRhcmdldEhhc2giOiJkYmI4MTFhZmJmMmI3NWI3Y2M5YTE5MTg5NzRmN2Q1NjhkYWI4MzJjNTI3ZmI5Mjc1NjAwYWM0ZTkyYzQwN2Y5IiwiRGlyZWN0aW9uIjoiTGVmdCJ9LHsiVGFyZ2V0SGFzaCI6IjZiZmM0NWFiNjc5Nzc0ZjhkNDFjM2IwOGM0NDY0YTRhMzkxYjczNjZjZDEwMTkxZWYyMjJmNDkwMTc3N2ZhYzYiLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiZjYxNjIwNzk0Yjg5OTYxZmQ3NzA5NTNlYjFkYWZkM2QyNjdlODFlN2Q3NmMxZjc1MjgwNDMyMTBlN2M4ODAzYyIsIkRpcmVjdGlvbiI6IkxlZnQifSx7IlRhcmdldEhhc2giOiIzZTBhOWM2MzU1ZGM1YjM5ZDE5NGIwNDliMWQ4YmIyMzM1Y2I5NzMzMWUxNDQ3YzkzYWYzYWNiODE4NmY1YjQ4IiwiRGlyZWN0aW9uIjoiTGVmdCJ9LHsiVGFyZ2V0SGFzaCI6IjM1MjYzMzRhYmQ3NzBkOTIxMWQ5Y2I1Y2RlYzAyY2JlMTZlMTFjOTcwYWRkZjkyODdhYWFmNmMxYTIwMjBiZTciLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiOGVlMGRhMzZmOTE4YTEzM2VjZDJiNjFiZDRkN2FjMmQ2NTYxZjA4YWFiZTFlNjQ5ZTFiOTExMGJlYTdkNjQ3NSIsIkRpcmVjdGlvbiI6IkxlZnQifV0sIkNvbnRyYWN0QWRkciI6IjM2YmI1YzA1M2I2YjgzOWM4ZjZiOTIzZmU4NTJmOTEyMzliOWZjY2MifQ=='
        }}
        onSubmit={onAddClaim}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h4>Tag</h4>
            <Field name="tag" component="input" />

            <h4>Body</h4>
            <Field name="body" component="textarea" />

            <h4>Body Encrypted</h4>
            <Field name="bodyEncrypted" component="input" type="checkbox" />

            <br />
            <button type="submit">addClaim</button>
          </form>
        )}
      />
      <hr />
      <button onClick={onGetClaims}>getClaims</button>
      <hr />
      <button onClick={onBack}>Back</button>
    </div>
  );
};
