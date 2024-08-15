using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace GYM_Backend.Migrations
{
    /// <inheritdoc />
    public partial class newBDHosting : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "db597ff8-36d1-4483-870f-ce9fd502a511");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e06ce539-fa49-4d06-82d0-b9700e8d686a");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "34be7ae4-aa1f-4807-aa51-247f9b513252", null, "Instructor", "INSTRUCTOR" },
                    { "868fae1c-ab34-4eeb-97c4-ed482519160f", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "34be7ae4-aa1f-4807-aa51-247f9b513252");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "868fae1c-ab34-4eeb-97c4-ed482519160f");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "db597ff8-36d1-4483-870f-ce9fd502a511", null, "Instructor", "INSTRUCTOR" },
                    { "e06ce539-fa49-4d06-82d0-b9700e8d686a", null, "User", "USER" }
                });
        }
    }
}
