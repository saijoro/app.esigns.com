const DocsColumns = () => {
  return [
    {
      accessorFn: (row: any) => row.serial,
      id: "serial",
      header: () => <span>S.No</span>,
      footer: (props: any) => props.column.id,
      width: "50px",
      maxWidth: "50px",
      minWidth: "50px",
      cell: (info: any) => <span>{info.getValue()}</span>,
    },
    {
      accessorFn: (row: any) => row.title,
      id: "title",
      cell: (info: any) => {
        return <span>{info.getValue()}</span>;
      },
      width: "200px",
      maxWidth: "200px",
      minWidth: "200px",
      header: () => <span>Name</span>,
      footer: (props: any) => props.column.id,
    },
    {
      accessorFn: (row: any) => row.document_data?.["SENDER@primary_fields_5"],
      id: "SENDER@primary_fields_5",
      cell: (info: any) => {
        return <span>{info.getValue()}</span>;
      },
      width: "200px",
      maxWidth: "200px",
      minWidth: "200px",
      header: () => <span>From</span>,
      footer: (props: any) => props.column.id,
    },
    // {
    //   accessorFn: (row: any) => row.company_document_data?.["title"],
    //   id: "title",
    //   cell: (info: any) => {
    //     return <span>{info.getValue()}</span>;
    //   },
    //   width: "200px",
    //   maxWidth: "200px",
    //   minWidth: "200px",
    //   header: () => <span>Company</span>,
    //   footer: (props: any) => props.column.id,
    // },
    {
      accessorFn: (row: any) => row.status,
      id: "status",
      cell: (info: any) => {
        return <span>{info.getValue()}</span>;
      },
      width: "200px",
      maxWidth: "200px",
      minWidth: "200px",
      header: () => <span>Status</span>,
      footer: (props: any) => props.column.id,
    },
    {
      accessorFn: (row: any) => row.updated_at,
      id: "updated_at",
      cell: (info: any) => {
        return <span>{info.getValue()}</span>;
      },
      width: "200px",
      maxWidth: "200px",
      minWidth: "200px",
      header: () => <span>Last Modified</span>,
      footer: (props: any) => props.column.id,
    },
    {
      accessorFn: (row: any) => row.created_at,
      id: "created_at",
      cell: (info: any) => {
        return <span>{info.getValue()}</span>;
      },
      width: "200px",
      maxWidth: "200px",
      minWidth: "200px",
      header: () => <span>Created at</span>,
      footer: (props: any) => props.column.id,
    },
    {
      accessorFn: (row: any) => row.expires_at,
      id: "expires_at",
      cell: (info: any) => {
        return <span>{info.getValue()}</span>;
      },
      width: "200px",
      maxWidth: "200px",
      minWidth: "200px",
      header: () => <span>Expires at</span>,
      footer: (props: any) => props.column.id,
    },

    {
      accessorFn: (row: any) => row.actions,
      id: "actions",
      cell: (info: any) => (
        <>
          <ul className="table-action-buttons flex space-x-2 items-center">
            <li>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-white/30 px-2 py-1 text-sm font-medium text-white hover:bg-white/50"
              ></button>
            </li>
          </ul>
        </>
      ),
      header: () => <span>Actions</span>,
      footer: (props: any) => props.column.id,
      width: "120px",
      minWidth: "120px",
      maxWidth: "120px",
    },
  ];
};
export default DocsColumns;
