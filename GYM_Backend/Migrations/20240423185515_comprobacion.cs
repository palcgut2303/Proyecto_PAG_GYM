using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace GYM_Backend.Migrations
{
    /// <inheritdoc />
    public partial class comprobacion : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "530a194e-4084-4251-8631-7ae7f0ccbd47");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5528e85a-6b82-40e6-8cbe-a7442bd616fc");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "a1fe2c95-3e80-4980-9636-aee27edbf5cb", null, "Instructor", "INSTRUCTOR" },
                    { "accfbcc7-bc13-472c-adf4-9ac750050215", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a1fe2c95-3e80-4980-9636-aee27edbf5cb");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "accfbcc7-bc13-472c-adf4-9ac750050215");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "530a194e-4084-4251-8631-7ae7f0ccbd47", null, "Instructor", "INSTRUCTOR" },
                    { "5528e85a-6b82-40e6-8cbe-a7442bd616fc", null, "User", "USER" }
                });
        }
    }
}
