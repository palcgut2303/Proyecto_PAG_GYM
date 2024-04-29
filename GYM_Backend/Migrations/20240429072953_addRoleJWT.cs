using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace GYM_Backend.Migrations
{
    /// <inheritdoc />
    public partial class addRoleJWT : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5f7795fb-61cc-405d-b919-b86c97a5fa92");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7bed2455-5692-4def-b0f6-1d05d960285d");

            migrationBuilder.AddColumn<string>(
                name: "Role",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "ac69ae34-3dad-4584-960e-fa10722daae8", null, "Instructor", "INSTRUCTOR" },
                    { "d26e1cfe-1a58-494c-83c9-d03da0ebf2ba", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ac69ae34-3dad-4584-960e-fa10722daae8");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d26e1cfe-1a58-494c-83c9-d03da0ebf2ba");

            migrationBuilder.DropColumn(
                name: "Role",
                table: "AspNetUsers");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "5f7795fb-61cc-405d-b919-b86c97a5fa92", null, "User", "USER" },
                    { "7bed2455-5692-4def-b0f6-1d05d960285d", null, "Instructor", "INSTRUCTOR" }
                });
        }
    }
}
