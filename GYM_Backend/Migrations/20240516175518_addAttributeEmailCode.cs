using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace GYM_Backend.Migrations
{
    /// <inheritdoc />
    public partial class addAttributeEmailCode : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "07cdd595-7d79-48cc-b8e6-a0bab718f6f5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7239a103-5b55-4e12-b258-80c0ba8fc6df");

            migrationBuilder.AddColumn<string>(
                name: "EmailCode",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "db597ff8-36d1-4483-870f-ce9fd502a511", null, "Instructor", "INSTRUCTOR" },
                    { "e06ce539-fa49-4d06-82d0-b9700e8d686a", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "db597ff8-36d1-4483-870f-ce9fd502a511");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e06ce539-fa49-4d06-82d0-b9700e8d686a");

            migrationBuilder.DropColumn(
                name: "EmailCode",
                table: "AspNetUsers");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "07cdd595-7d79-48cc-b8e6-a0bab718f6f5", null, "Instructor", "INSTRUCTOR" },
                    { "7239a103-5b55-4e12-b258-80c0ba8fc6df", null, "User", "USER" }
                });
        }
    }
}
