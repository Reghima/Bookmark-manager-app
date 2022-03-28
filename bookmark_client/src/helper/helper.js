import React from "react";
import { NavLink } from "react-router-dom";
import { Popconfirm, Space, Button, Tag } from "antd";
import moment from "moment";

export const columns = (deleteOneBookmark) => [
  {
    title: <span>Lien</span>,
    dataIndex: "bookmarkUrl",
    key: "bookmarkUrl",
    sorter: (a, b) => (a.bookmarkUrl < b.bookmarkUrl ? -1 : 1),
    render: (bookmarkUrl, record) => (
      <NavLink to={`/bookmark-details/${record._id}`}>
        <div>{bookmarkUrl}</div>
      </NavLink>
    ),
  },
  {
    title: <span>Titre</span>,
    dataIndex: "bookmarkTitle",
    key: "bookmarkTitle",
    sorter: (a, b) => (a.bookmarkTitle < b.bookmarkTitle ? -1 : 1),
    render: (bookmarkTitle, record) => (
      <NavLink to={`/bookmark-details/${record._id}`}>
        <div>{bookmarkTitle}</div>
      </NavLink>
    ),
  },
  {
    title: <span>Auteur</span>,
    dataIndex: "bookmarkAuthor",
    key: "bookmarkAuthor",
    sorter: (a, b) => (a.bookmarkAuthor < b.bookmarkAuthor ? -1 : 1),
    render: (bookmarkAuthor, record) => (
      <NavLink to={`/bookmark-details/${record._id}`}>
        <div>{bookmarkAuthor}</div>
      </NavLink>
    ),
  },
  {
    title: <span>Mots clés</span>,
    dataIndex: "bookmarkTags",
    key: "bookmarkTags",
    sorter: (a, b) => (a.bookmarkTags < b.bookmarkTags ? -1 : 1),
    render: (bookmarkTags, record) => (
      <NavLink to={`/bookmark-details/${record._id}`}>
        <div>
          {bookmarkTags.map((bookmarkTag) => (
            <Tag color="blue" key={bookmarkTag} style={{ margin: "2px" }}>
              {bookmarkTag}
            </Tag>
          ))}
        </div>
      </NavLink>
    ),
  },

  {
    title: <span>Date d'ajout</span>,
    dataIndex: "bookmarkAddedDate",
    key: "bookmarkAddedDate",
    sorter: (a, b) => (a.bookmarkAddedDate < b.bookmarkAddedDate ? -1 : 1),
    render: (bookmarkAddedDate, record) => (
      <NavLink to={`/bookmark-details/${record._id}`}>
        <div>{moment(bookmarkAddedDate).format("DD MMMM YYYY  h:mm:ss A")}</div>
      </NavLink>
    ),
  },

  {
    title: <span>Actions</span>,
    dataIndex: "action",
    render: (text, record) => (
      <Space size="middle">
        <NavLink to={`/bookmark-edit/${record._id}`}>
          <Button type="primary">Modifier</Button>
        </NavLink>

        <Popconfirm
          title="Êtes-vous sûr de supprimer ce Bookmark ?"
          onConfirm={(e) => {
            e.stopPropagation();
            deleteOneBookmark(record._id);
          }}
          onCancel={(e) => e.stopPropagation()}
          okText="Oui"
          cancelText="Non"
        >
          <Button type="primary" danger>
            Supprimer
          </Button>
        </Popconfirm>
      </Space>
    ),
  },
];
