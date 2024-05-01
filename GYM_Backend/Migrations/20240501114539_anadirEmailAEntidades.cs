using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace GYM_Backend.Migrations
{
    /// <inheritdoc />
    public partial class anadirEmailAEntidades : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GymInstructors_AspNetUsers_UserId",
                table: "GymInstructors");

            migrationBuilder.DropForeignKey(
                name: "FK_GymMembers_AspNetUsers_UserId",
                table: "GymMembers");

            migrationBuilder.DropIndex(
                name: "IX_GymMembers_UserId",
                table: "GymMembers");

            migrationBuilder.DropIndex(
                name: "IX_GymInstructors_UserId",
                table: "GymInstructors");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ac69ae34-3dad-4584-960e-fa10722daae8");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d26e1cfe-1a58-494c-83c9-d03da0ebf2ba");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "GymMembers");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "GymInstructors");

            migrationBuilder.AddColumn<string>(
                name: "emailMember",
                table: "GymMembers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "emailUser",
                table: "GymInstructors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "17abf164-0d98-4489-8c68-c20a9c8d9406", null, "User", "USER" },
                    { "944f50ae-2474-46d4-982d-4b1ba1c2d1f7", null, "Instructor", "INSTRUCTOR" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "17abf164-0d98-4489-8c68-c20a9c8d9406");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "944f50ae-2474-46d4-982d-4b1ba1c2d1f7");

            migrationBuilder.DropColumn(
                name: "emailMember",
                table: "GymMembers");

            migrationBuilder.DropColumn(
                name: "emailUser",
                table: "GymInstructors");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "GymMembers",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "GymInstructors",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "ac69ae34-3dad-4584-960e-fa10722daae8", null, "Instructor", "INSTRUCTOR" },
                    { "d26e1cfe-1a58-494c-83c9-d03da0ebf2ba", null, "User", "USER" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_GymMembers_UserId",
                table: "GymMembers",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_GymInstructors_UserId",
                table: "GymInstructors",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_GymInstructors_AspNetUsers_UserId",
                table: "GymInstructors",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GymMembers_AspNetUsers_UserId",
                table: "GymMembers",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
